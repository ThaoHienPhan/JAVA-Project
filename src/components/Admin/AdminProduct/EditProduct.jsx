import React, { useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import productApi from '~/api/productApi';
import { Controller, useForm } from 'react-hook-form';
import axiosClient from '~/api/axios';
import Swal from 'sweetalert2';
import { Select } from 'antd';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import LoadingComponent from '~/components/Loading';

function EditProduct() {
  const fileTypes = ['JPG', 'PNG', 'GIF'];
  const imgUrl = 'http://localhost:8080/files';

  const { t } = useTranslation();
  const { id } = useParams();
  const { pathname } = useLocation();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { register, handleSubmit, control, reset } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [submitData, setSubmitData] = useState({});

  const handleUpload = async formData => {
    return await axiosClient.post('http://localhost:8080/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const productDetails = useQuery(
    ['productDetail', id],
    () => productApi.getDetail(id),
    { staleTime: 0, enabled: !!id }
  );

  const upload = useMutation({
    mutationFn: handleUpload,
    onSuccess: res => {
      if (id) {
        handleUpdateProduct.mutate({
          id: productDetails.data?.productId,
          data: {
            url: res.message ? res.message : productDetails.data?.productUrl,
            ...submitData,
          },
        });
      } else {
        handleAddProduct.mutate({
          data: {
            url: res.message,
            ...submitData,
          },
        });
      }
    },
  });

  const handleUpdateProduct = useMutation({
    mutationFn: productApi.updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['allProducts']);
      queryClient.invalidateQueries(['productDetail']);
      toast.success(t('update_success_common'));
      navigate('/admin/products');
    },
  });

  const handleDeleteProduct = useMutation({
    mutationFn: productApi.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['allProducts']);
      queryClient.invalidateQueries(['productDetail']);
      toast.success(t('delete_success_common'));
      navigate(-1);
    },
  });

  const handleAddProduct = useMutation({
    mutationFn: productApi.addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['allProducts']);
      queryClient.invalidateQueries(['productDetail']);
      navigate('/admin/products');
      toast.success(t('add_success_common'));
    },
  });

  useEffect(() => {
    if (!id) {
      reset({
        name: '',
        price: 0,
        discount: 0,
        describe: '',
        type: '',
        url: '',
      });
    }
    setImage(null);
    setSubmitData(null);
    setPreviewImage(null);
  }, [pathname]);

  function handleImageChange(file) {
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        handleDeleteProduct.mutate(id);
      }
    });
  };

  const onSubmit = data => {
    if (data) {
      setSubmitData({
        discount: Number(data.discount),
        name: data.name,
        price: Number(data.price),
        type: data.type,
        describe: data.describe,
      });

      if (image && image !== null) {
        const formData = new FormData();
        formData.append('file', image);
        console.log(image);
        upload.mutate(formData);
      }

      if (!image) {
        handleUpdateProduct.mutate({
          id: productDetails.data?.productId,
          data: {
            url: productDetails.data?.productUrl,
            discount: Number(data.discount),
            name: data.name,
            price: Number(data.price),
            type: data.type,
            describe: data.describe,
          },
        });
      }
    }
  };

  const options = [
    {
      value: 'ACCESSORIES',
      label: 'Accessories',
    },
    {
      value: 'AIRPODS',
      label: 'Airpods',
    },
    {
      value: 'IPAD',
      label: 'Ipad',
    },
    {
      value: 'IPHONE',
      label: 'Iphone',
    },
    {
      value: 'MACBOOK',
      label: 'Macbook',
    },
    {
      value: 'WATCH',
      label: 'Watch',
    },
  ];

  const handleCancel = () => {
    navigate('/admin/products');
  };

  if (id && productDetails.isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="px-5 py-7 w-full">
      <h2 className="font-bold text-3xl w-full h-24">
        {id && productDetails.data ? 'Edit' : 'Add'} Product
      </h2>
      <div className="w-full px-16 h-full">
        <form
          className="w-full flex justify-between gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <p>{t('product_name')}</p>
              <input
                type="text"
                defaultValue={!id ? '' : productDetails.data?.productName}
                className="border w-full h-9 rounded-md px-3 mt-2"
                {...register('name')}
              />
            </div>
            <div className="mt-2">
              <p>{t('category')}</p>
              <Controller
                {...register('type')}
                name="type"
                control={control}
                ref={null}
                render={({ field }) => (
                  <Select
                    {...field}
                    className="w-full mt-2"
                    defaultValue={id && productDetails.data?.type}
                    options={options}
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-between gap-3 mt-2">
              <p>{t('description')}</p>
              <textarea
                className="w-full border h-40 p-3"
                defaultValue={id && productDetails.data?.productDescribe}
                {...register('describe')}
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between gap-5">
            <div className="h-1/2">
              <p>{t('product_image')}</p>
              <FileUploader
                classes="!h-[calc(100%-24px)] !p-0 !mt-2 !min-w-[150px] !max-w-[250px]"
                handleChange={handleImageChange}
                name="file"
                types={fileTypes}
                label={t('upload_drop_photo')}
                showFileType={false}
                maxSize="2"
              >
                {((id && productDetails.data?.productUrl) || previewImage) && (
                  <img
                    src={
                      previewImage
                        ? previewImage
                        : `${imgUrl}/${productDetails.data.productUrl}`
                    }
                    alt=""
                    className="object-contain min-w-[150px] max-w-[200px] h-40"
                  />
                )}
              </FileUploader>
            </div>
            <div className="flex w-full gap-5">
              <div className="w-1/2">
                <p>{t('product_price')}</p>
                <input
                  type="number"
                  defaultValue={id && productDetails.data?.price}
                  {...register('price')}
                  className="border w-full h-9 rounded-md px-3 mt-2"
                />
              </div>
              <div className="w-1/2">
                <p>{t('discount')}</p>
                <input
                  type="number"
                  min={0}
                  max={100}
                  defaultValue={id && productDetails.data?.discount}
                  {...register('discount')}
                  className="border w-full h-9 rounded-md px-3 mt-2"
                />
              </div>
            </div>
            <div className="flex w-full justify-between gap-3 mt-8 text-white">
              <button
                className="w-1/2 px-7 py-3 border rounded-md bg-blue-700"
                type="submit"
              >
                {id && productDetails.data ? t('save') : t('add')}
              </button>
              <button
                className="w-1/2 px-7 py-3 border rounded-md bg-red-500"
                type="button"
                onClick={
                  id && productDetails.data ? handleDelete : handleCancel
                }
              >
                {id && productDetails.data ? t('delete') : t('cancel_common')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
