import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('Jest setup and first test', () => {
  it('should display renedr the App', () => {
    const homeText = 'Teste técnico Acert - To-do List';
    render(<App />);

    expect(screen.queryByText(homeText)).toBeInTheDocument();
  });
});
