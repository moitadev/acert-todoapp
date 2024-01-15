import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('Input Component', () => {
  test('renders input with default variant and size', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('bg-neutral-800 focus:ring-1 focus:ring-neutral-500 text-white placeholder-neutral-500');
    expect(inputElement).toHaveClass('w-full');
  });

  test('renders input with custom variant', () => {
    render(<Input variant="listItem" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('bg-neutral-800 text-white hover:cursor-default text-lg w-full');
  });

  test('renders input with custom className', () => {
    render(<Input className="custom-class" />);
    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-class');
  });

});
