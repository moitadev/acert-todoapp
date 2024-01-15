import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util';
import { RefObject } from 'react';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
      ref?:  RefObject<HTMLInputElement>;
    }

export const Input = ({ className, variant, sizeVariant, ...props }: InputProps) => {
  return (
    <input className={cn(inputVariants({ className, variant, sizeVariant }))} {...props} />
  );
};

const inputVariants = cva(
  'px-4 py-2 select-none [outline:none] shadow-md mt-4 rounded-md max-h-11',
  {
    variants: {
      variant: {
        default: 'bg-neutral-800 focus:ring-1 focus:ring-neutral-500 text-white placeholder-neutral-500',
        listItem:
          'bg-neutral-800 text-white hover:cursor-default text-lg w-full',
        checkedItem:
          'bg-emerald-800 focus:ring-emerald-700 line-through text-gray-200 hover:cursor-default text-lg italic w-full',
      },
      sizeVariant: {
        full: 'w-full',
        normal: '',
      }
    },
    defaultVariants: {
      variant: 'default',
      sizeVariant: 'full'
    },
  }
);
