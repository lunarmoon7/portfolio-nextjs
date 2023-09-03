import { cn } from '@/utils/cn';

export const DurationBadge = ({ duration }: { duration: string }) => {
  return (
    <span className=' bg-slate-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl border-2 border-black shadow-md shadow-gray-300'>
      {duration}
    </span>
  );
};
export const TechStackBadge = ({
  name,
  color,
  bgColor,
  borderColor,
}: {
  name?: string;
  color: string;
  bgColor: string;
  borderColor: string;
}) => {
  console.log(cn(color, bgColor, borderColor));
  return (
    <span
      className={cn(
        'text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full shadow-md border-2 ',
        color,
        bgColor,
        borderColor
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
