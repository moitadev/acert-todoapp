import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util';

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = ({
  className,
  variant,
  sizeVariant,
  ...props
}: CheckboxProps) => {
  return (
    <div className='flex gap-2'>
      <input
        type="checkbox"
        className={cn(checkboxVariants({ variant, sizeVariant, className }))}
        {...props}
      />
      <svg
        className="absolute w-11 h-11 mt-4 hidden peer-checked:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <polyline points="20 6 9 17 4 12"></polyline>{' '}
      </svg>
    </div>
  );
};

const checkboxVariants = cva(
  'mt-4 relative peer shrink-0 border-2 border-emerald-600 appearance-none rounded-md bg-white',
  {
    variants: {
      variant: {
        default: 'checked:border-0 checked:bg-emerald-800 checked:border-0',
        checkedItem:
          'bg-emerald-800 focus:ring-emerald-700 line-through text-gray-200 hover:cursor-default text-lg italic',
      },
      sizeVariant: {
        default: 'h-11 max-h-11 w-11 max-w-11',
        normal: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      sizeVariant: 'default',
    },
  }
);
