import React from 'react';

const MainButton = ({ text, className, href }) => {
  return (
    <a href={href} className={`main-button ${className} -moz-appearance-none -webkit-appearance-none appearance-none border-none bg-none text-[#0f1923] cursor-pointer relative p-2 mb-5 uppercase font-bold text-sm transition-all duration-300 my-8`}>
      <div className="main-button_lg relative block px-5 py-[10px] text-white bg-black overflow-hidden shadow-[inset_0px_0px_0px_1px_transparent]">
        <span className="main-button_sl block absolute top-0 bottom-[-1px] left-[-8px] w-0 bg-[var(--primary-color)] skew-x-[-15deg] transition-all duration-200"></span>
        <span className="main-button_text relative">{text}</span>
      </div>
    </a>
  );
};

export default MainButton;