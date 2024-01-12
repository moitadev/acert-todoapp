import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = ({ className, variant, ...props }: InputProps) => {
  return (
    <input className={cn(inputVariants({ variant, className }))} {...props} />
  );
};

const inputVariants = cva(
  'px-4 py-2 select-none [outline:none] shadow-md mt-4 rounded-md w-full',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 focus:ring-emerald-500 text-gray-800',
        listItem:
          'bg-slate-600 focus:ring-slate-800 text-white hover:cursor-default',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
