import React from 'react';

const Experience = ({ image }) => {
  return (
    <div className="flex flex-col items-center">
      <img alt="" src={image} />
      <span className="text-2xl mx-5 mt-1 text-left">
        Giao hàng nhanh trong 2h tại thành phố HCM
      </span>
    </div>
  );
};

export default Experience;
