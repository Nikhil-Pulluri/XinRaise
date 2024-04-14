import React from 'react';
interface FundingCard {
  pId: number;
  owner: `0x${string}`;
  title: string;
  description: string;
  target: bigint;
  deadline: bigint;
  amountCollected: bigint;
  image: string;
}

interface FundingCardProps {
  project: FundingCard;
}

const FundingCard: React.FC<FundingCardProps> = ({ project }) => {
  const unixTimestamp = Number(project.deadline);
  const timestampInMilliseconds = unixTimestamp * 1000;
  const date = new Date(timestampInMilliseconds);
  const formattedDate = date.toLocaleDateString();


  return (
    <div className="w-[900px] px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDate}</span>
        <a
          href="#"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-[#836FFF] rounded hover:bg-gray-500"
          tabIndex={0}
          role="button"
        >
          Funding Raising
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex={0}
          role="link"
        >
          {project.title}
        </a>
        <img className='p-5 rounded-xl object-cover' src={project.image} alt="Project Image" />
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => { console.log('Funding') }}
          className="text-white font-bold shadow-lg px-5 py-2 rounded-xl bg-[#836FFF] dark:text-blue-400"
        >
          Fund Business
        </button>

        <div className="flex items-center">
          <img
            className="hidden sm:block h-10 p-2 border rounded-full mx-4 object-contain"
            src={'/metamask-icon.webp'}
            alt="avatar"
          />
          <p
            className="font-bold text-gray-700 dark:text-gray-200"
          >{project.owner}
          </p>
        </div>
      </div>
    </div >
  );
};

export default FundingCard;
