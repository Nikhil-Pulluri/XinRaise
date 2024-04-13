import React from 'react';

interface CountBoxProps {
  title: string;
  value: number;
}

const CountBox: React.FC<CountBoxProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px] rounded-lg">
      <h4 className="font-epilogue font-bold text-[30px] text-black p-3 bg-white rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] rounded-e-lg text-black bg-gray-100 px-3 py-2 w-full rouned-b-[10px] text-center">{title}</p>
    </div>
  );
};

export default CountBox;
