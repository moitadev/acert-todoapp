import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util';
import { ReactNode } from 'react';

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva(
  'cursor-pointer select-none [outline:none] shadow-md mt-4 rounded-md h-full max-h-11',
  {
    variants: {
      variant: {
        primary:
          'bg-emerald-700 hover:bg-emerald-600 focus:ring-emerald-500 text-white border-2 border-emerald-700 hover:border-emerald-600',
        secondary:
          'bg-teal-700 hover:bg-teal-600 focus:ring-teal-500 text-white border-2 border-teal-700 hover:border-teal-600',
        danger:
          'bg-rose-700 hover:bg-rose-600 focus:ring-rose-500 text-white border-2 border-rose-700 hover:border-rose-600',
        outlinePrimary:
          'hover:bg-emerald-700 hover:text-white border-2 border-emerald-700 focus:ring-emerald-500 text-emerald-700 bg-transparent',
        outlineSecondary:
          'hover:bg-teal-700 hover:text-white border-2 border-teal-700 focus:ring-teal-500 text-teal-700 bg-transparent',
        outlineDanger:
          'hover:bg-rose-700 hover:text-white border-2 border-rose-700 focus:ring-rose-500 text-rose-700 bg-transparent',
      },
      size: {
        sm: 'text-sm px-2 py-2',
        md: 'text-base px-4 py-2',
        lg: 'text-xl px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
