import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from '../Textarea';

describe('Textarea Component', () => {
  it('renders the textarea component', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies provided className', () => {
    render(<Textarea className="custom-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });

  it('check if I can type', () => {
    render(<Textarea />);
    
    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement;

    fireEvent.change(textareaElement, { target: { value: 'Test input' } });
    expect(textareaElement.value).toBe('Test input');
  });

});
