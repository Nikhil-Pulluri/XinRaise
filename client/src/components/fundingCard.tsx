import React from 'react';

const FundingCard: React.FC = () => {
  return (
    <div className="max-w-4xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
        <a
          href="#"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-[#836FFF] rounded hover:bg-gray-500"
          tabIndex={0}
          role="button"
        >
          Fund Raising
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex={0}
          role="link"
        >
          Accessibility tools for designers and developers
        </a>
        <img className='p-5 rounded-xl object-cover' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-white font-bold shadow-lg px-5 py-2 rounded-xl bg-[#836FFF] dark:text-blue-400"
          tabIndex={0}
          role="link"
        >
          Fund Business
        </a>

        <div className="flex items-center">
          <img
            className="hidden sm:block h-10 p-2 border rounded-full mx-4 object-cover"
            src={'/metamask-icon.webp'}
            alt="avatar"
          />
          <a
            href="#"
            className="font-bold text-gray-700 dark:text-gray-200"
            tabIndex={0}
            role="link"
          >
            Khatab Wedaa
          </a>
        </div>
      </div>
    </div>
  );
};

export default FundingCard;
