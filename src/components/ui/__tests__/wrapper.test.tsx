import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Wrapper } from '../Wrapper';

describe('Wrapper Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Wrapper size="full">Hello World</Wrapper>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('applies default size variant when not specified', () => {
    const { container } = render(<Wrapper>Hello World</Wrapper>);
    expect(container.firstChild).not.toHaveClass('max-w-3xl w-full');
  });

  it('applies the specified size variant', () => {
    const { container } = render(<Wrapper size="half">Hello World</Wrapper>);
    expect(container.firstChild).toHaveClass('w-50');
  });

  it('applies custom className if provided', () => {
    const { container } = render(
      <Wrapper size="full" className="custom-class">
        Hello World
      </Wrapper>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});