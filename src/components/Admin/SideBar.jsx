import React from 'react';
import PropTypes from 'prop-types';

SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div>
      <div className="bg-slate-200 w-[200px] h-screen">
        <ul className="pt-[30px] flex flex-col items-center gap-[50px]">
          <li className='w-full text-center border-b-2 border-slate-300 pb-[10px]'>Total User</li>
          <li className='w-full text-center border-b-2 border-slate-300 pb-[10px]'>Total User</li>
          <li className='w-full text-center border-b-2 border-slate-300 pb-[10px]'>Total User</li>
          <li className='w-full text-center border-b-2 border-slate-300 pb-[10px]'>Total User</li>
          <li className='w-full text-center border-b-2 border-slate-300 pb-[10px]'>Total User</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
