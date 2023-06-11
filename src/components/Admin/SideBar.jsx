import React from 'react';
import PropTypes from 'prop-types';
import { GrUserAdmin } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';


SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="bg-slate-200 w-[200px] min-h-screen">
      <div className="flex text-xl justify-center gap-[10px]">
        <div>
          <GrUserAdmin />
        </div>
        <div className='font-bold'>Admin</div>
      </div>
      <div>
        <ul className="pt-[30px] flex flex-col items-center gap-[50px]">
          <li className="w-full text-center border-b-2 border-slate-300 pb-[10px] flex justify-center items-center cursor-pointer">
            Product Management
            <IoMdArrowDropdown />
          </li>
          <li className="w-full text-center border-b-2 border-slate-300 pb-[10px] flex justify-center items-center cursor-pointer">
            User Management
            <IoMdArrowDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
