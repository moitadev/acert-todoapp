import { useState } from 'react';

type AccordionProps = {
  task: string;
  desc: string;
};

export const Accordion = ({ task, desc }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      <div
        className={
          'flex items-center justify-between px-4 py-2 rtl:text-right select-none [outline:none] mt-4 bg-slate-600 focus:ring-emerald-500 text-white hover:cursor-pointer' +
          (isExpanded ? ' rounded-t-md' : ' rounded-md shadow-md')
        }
        onClick={handleToggle}
      >
        {task}
        <svg
          className={'w-3 h-3 shrink-0' + (isExpanded ? ' rotate-180' : '')}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>
      {isExpanded && (
        <div className="px-4 py-2 w-full bg-slate-500 rounded-b-md shadow-inner font-light text-sm">
          {desc}
        </div>
      )}
    </div>
  );
};
