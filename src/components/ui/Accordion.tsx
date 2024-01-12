import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util';
import { useState } from 'react';

interface AccordionProps extends VariantProps<typeof taskVariants | typeof descVariants> {
  task: string;
  desc: string;
  className?: string;
}

export const Accordion = ({ className, variant, task, desc }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      <div
        className={cn(taskVariants({ variant, className })+(isExpanded ? ' rounded-t-md' : ' rounded-md shadow-md'))}
        onClick={handleToggle}
      >
        {task}
        <svg
          className={
            'w-3 h-3 shrink-0 transition-all ease-in' +
            (isExpanded ? ' rotate-180' : '')
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>
      {isExpanded && (
        <div className={cn(descVariants({ variant, className }))}>
          {desc}
        </div>
      )}
    </div>
  );
};

const taskVariants = cva(
  'flex items-center justify-between px-4 py-2 rtl:text-right select-none [outline:none] mt-4 hover:cursor-pointer text-lg max-h-11',
  {
    variants: {
      variant: {
        default: 'bg-slate-600 focus:ring-emerald-500 text-white',
        checkedItem:
          'bg-emerald-800 focus:ring-emerald-700 line-through text-gray-200 italic',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const descVariants = cva(
  'px-4 py-2 w-full rounded-b-md shadow-inner font-light text-sm',
  {
    variants: {
      variant: {
        default: 'bg-slate-500 text-white',
        checkedItem:
          'bg-emerald-700 focus:ring-emerald-600 line-through text-gray-200 italic',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
