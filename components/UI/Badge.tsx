import { cn } from '@/utils/cn';

export const DurationBadge = ({ duration }: { duration: string }) => {
  return (
    <span className='text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5'>
      in {duration}
    </span>
  );
};
export const TechStackBadge = ({ name }: { name?: string }) => {
  let color, bgColor, borderColor, shadow;
  if (name === 'React') {
    color = 'text-white';
    bgColor = 'bg-[#61dafb]';
    shadow = 'shadow-[#61dafb]';
    borderColor = 'border-[#20232a]';
  } else if (name === 'JavaScript') {
    color = 'text-black';
    bgColor = 'bg-[#F0DB4F]';
    shadow = 'shadow-[#F0DB4F]';
    borderColor = 'border-[#ac9c36]';
  } else if (name === 'HTML5') {
    color = 'text-white';
    bgColor = 'bg-[#E34C26]';
    shadow = 'shadow-[#E34C26]';
    borderColor = 'border-[#f06529]';
  } else if (name === 'CSS3') {
    color = 'text-white';
    bgColor = 'bg-[#264de4]';
    shadow = 'shadow-[#264de4]';
    borderColor = 'border-[#2965f1]';
  } else if (name === 'TypeScript') {
    color = 'text-white';
    bgColor = 'bg-[#007acc]';
    shadow = 'shadow-[#007acc]';
    borderColor = 'border-[#264de4]';
  } else if (name === 'NextJS') {
    color = 'text-white';
    bgColor = 'bg-[#000000]';
    shadow = 'shadow-[#000000]';
    borderColor = 'border-white';
  } else if (name === 'tailwindCSS') {
    color = 'text-white';
    bgColor = 'bg-[#0fa4e8]';
    shadow = 'shadow-[#0fa4e8]';
    borderColor = 'border-[#84ccec]';
  }
  return (
    <span
      className={cn(
        'text-md font-medium mr-2 px-2.5 py-0.5 rounded-full shadow-md border-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out',
        color,
        bgColor,
        borderColor,
        shadow
      )}
    >
      {name}
    </span>
  );
};

export const VisibilityBadge = ({ visibility }: { visibility: string }) => {
  return visibility === 'public' ? (
    <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 shadow-md shadow-green-300'>
      {visibility}
    </span>
  ) : (
    <span className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 shadow-md shadow-red-300'>
      {visibility}
    </span>
  );
};

export const ProgressBadge = ({ isWorkingNow }: { isWorkingNow: string }) => {
  return isWorkingNow === 'done' ? (
    <span className='bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 shadow-md shadow-indigo-300'>
      {isWorkingNow}
    </span>
  ) : (
    <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 shadow-md shadow-purple-300'>
      {isWorkingNow}
    </span>
  );
};
