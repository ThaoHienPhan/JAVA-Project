import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FileUploader } from 'react-drag-drop-files';

EditProduct.propTypes = {};

function EditProduct(props) {
  const fileTypes = ['JPG', 'PNG', 'GIF'];
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl w-full h-[100px]">Edit Product</h2>
      <div className="px-[20px]">
        <div className="flex justify-start items-center gap-[5px] cursor-pointer mb-[20px]">
          <AiOutlinePlus />
          <p>Add Product</p>
        </div>
        <div className="relative">
          <BiSearch className="absolute bottom-[8px] left-[8px] opacity-50" />
          <input
            placeholder="Search for productID, brand..."
            type="search"
            className="border rounded-md h-[35px] pl-10 w-[80%]"
          />
        </div>
        <div className="w-full flex mt-[50px]">
          <div className="w-6/12 px-[10px]">
            <div className="mb-[10px]">
              <p>Product Name</p>
              <input type="text" name="" id="" className="border w-full" />
            </div>
            <div className="flex mb-[10px]">
              <div className="w-[435px]">
                <p>Category</p>
                <input type="text" name="" id="" className="w-[90%] border" />
              </div>
              <div className="grow">
                <p>Gender</p>
                <input type="text" name="" id="" className="w-[63px] border" />
              </div>
            </div>
            <div className="grow mb-[10px]">
              <p>Brand</p>
              <input type="text" name="" id="" className="w-full border" />
            </div>
            <div className="grow mb-[10px]">
              <p>Description</p>
              <textarea className="w-full border" />
            </div>
          </div>
          <div className="w-6/12 px-[10px]">
            <div className="mb-[10px]">
              <p>Product Image</p>
              <div className="flex">
                <div>
                  <img src="" alt="" />
                </div>
                <div>{}</div>
                <div>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    maxSize="1"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-[20px]">
              <div className="">
                <p>Add Size</p>
                <input type="text" className="border w-full" />
              </div>
              <div>
                <p>Product Date</p>
                <input type="date" className="border w-full" />
              </div>
            </div>
            <div className="mt-[70px] flex gap-[20px]">
              <button className="px-[30px] py-[10px] border rounded-md hover:bg-blue-500">
                Add
              </button>
              <button className="px-[30px] py-[10px] border rounded-md hover:bg-blue-500">
                Save
              </button>
              <button className="px-[30px] py-[10px] border rounded-md hover:bg-blue-500">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
