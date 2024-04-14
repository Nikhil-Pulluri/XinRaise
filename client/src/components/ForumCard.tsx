import React from 'react';

export interface ForumCardProps {
  data: {
    date: string;
    category: string;
    title: string;
    description: string;
    readMoreLink: string;
    author: string
  };
}

const ForumCard: React.FC<ForumCardProps> = ({ data }) => {
  return (
    <div className="w-[900px] px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {data.date}
        </span>
        <a
          href="#"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded hover:bg-gray-500"
          tabIndex={0}
          role="button"
        >
          New Project
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex={0}
          role="link"
        >
          {data.title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {data.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href={data.readMoreLink}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex={0}
          role="link"
        >
          Read more
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
            {data.author}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
