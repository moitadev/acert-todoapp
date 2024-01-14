import { cn } from '@/util';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

interface WrapperProps extends VariantProps<typeof wrapperVariants> {
    children: ReactNode;
    className?: string;
}

export const Wrapper = ({children, size, className}: WrapperProps) => {
    return(
        <div className={cn(wrapperVariants({ size, className }))}>
            {children}
        </div>
    )
}

const wrapperVariants = cva(
    'flex gap-2 flex-col justify-center self-center px-4 py-2 pb-5 m-4 shadow-md bg-neutral-900 rounded-md',
    {
      variants: {
        size: {
          full: 'max-w-3xl w-full',
          half: 'w-50',
          default: '',
        },
      },
      defaultVariants: {
        size: 'default',
      },
    }
  );
  