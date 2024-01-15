import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '../Checkbox';

describe('Checkbox Component', () => {
  test('renders checkbox with default variants', () => {
    const { container } = render(<Checkbox />);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
  });

  test('renders checkbox with custom className', () => {
    const { container } = render(<Checkbox className="custom-class" />);

    const checkbox = container.querySelector('.custom-class');
    expect(checkbox).toBeInTheDocument();
  });

  test('renders checkbox with checked variant', () => {
    const { container } = render(<Checkbox variant="checkedItem" />);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveClass(
      'mt-4 relative peer shrink-0 border-2 border-neutral-800 appearance-none rounded-md cursor-pointer bg-emerald-800 focus:ring-emerald-700 line-through text-gray-200 hover:cursor-default text-lg italic h-11 max-h-11 w-11 max-w-11'
    );
  });

  test('handles checkbox click event', () => {
    const { container } = render(<Checkbox />);
  
    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(checkbox).not.toBeChecked();
  
    fireEvent.click(checkbox);
  
    expect(checkbox).toBeChecked();
  });
});
