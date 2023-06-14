import React from 'react';
import Mac from 'assets/images/image 11.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import productApi from '~/api/productApi';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const imgUrl = 'http://localhost:8080/files';
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleUpdate = item => {
    navigate(`/admin/products/update/${item.productId || item.id}`);
  };

  const handleDeleteProduct = useMutation({
    mutationFn: productApi.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['allProducts']);
      Swal.fire(
        t('deleted_common'),
        t('deleted_prod_message'),
        t('success_common')
      );
    },
  });

  const handleDelete = item => {
    Swal.fire({
      title: t('delete_warn_title'),
      text: t('revert_warn'),
      icon: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('confirm_delete'),
      cancelButtonText: t('cancel_common'),
    }).then(result => {
      if (result.isConfirmed) {
        handleDeleteProduct.mutate(item.productId || item.id);
      }
    });
  };

  return (
    <div className="inline-grid grid-cols-4 gap-10 mt-8">
      {product &&
        product.map((item, i) => (
          <div
            key={i}
            className="flex flex-col flex-wrap justify-between items-center bg-white p-5 rounded-lg cursor-pointer ct-shadow"
          >
            {item ? (
              <>
                <img
                  src={item ? `${imgUrl}/${item.productUrl || item.url}` : Mac}
                  alt=""
                  className="p-3 max-h-[175px] max-w-[175px] object-contain"
                />
                <p className="mt-3 text-lg">{item.productName || item.name}</p>
                <div className=" flex justify-between items-center w-full mt-3 gap-3">
                  {['delete', 'update'].map(data => (
                    <button
                      key={data}
                      className={`ct-button !rounded-md w-1/2 !border-none text-white/95 ${
                        data === 'delete' ? '!bg-red-500' : '!bg-green-500'
                      }`}
                      onClick={() =>
                        data === 'delete'
                          ? handleDelete(item)
                          : handleUpdate(item)
                      }
                    >
                      {t(data)}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
