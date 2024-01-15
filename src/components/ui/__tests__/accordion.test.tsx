import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from '../Accordion';

describe('Accordion Component', () => {
  it('renders component with default props', () => {
    const { getByText } = render(<Accordion task="Task 1" desc="Description 1" />);
    expect(getByText('Task 1')).toBeInTheDocument();
  });

  it('renders component with custom variant and className', () => {
    const { getByText } = render(
      <Accordion task="Task 2" desc="Description 2" variant="checkedItem" className="custom-class" />
    );
    const accordionElement = getByText('Task 2');
    expect(accordionElement).toHaveClass('custom-class');
    expect(accordionElement).toHaveClass('bg-emerald-800');
  });

  it('expands and collapses on click', () => {
    const { getByText } = render(<Accordion task="Task 3" desc="Description 3" />);
    const accordionElement = getByText('Task 3');

    expect(accordionElement).not.toHaveClass('rounded-t-md');

    fireEvent.click(accordionElement);

    expect(accordionElement).toHaveClass('rounded-t-md');

    fireEvent.click(accordionElement);

    expect(accordionElement).not.toHaveClass('rounded-t-md');
  });

  it('renders description when expanded', () => {
    const { getByText } = render(<Accordion task="Task 4" desc="Description 4" />);
    const accordionElement = getByText('Task 4');

    expect(accordionElement.nextElementSibling).toBeNull();

    fireEvent.click(accordionElement);

    expect(accordionElement.nextElementSibling).toBeInTheDocument();
  });
});
