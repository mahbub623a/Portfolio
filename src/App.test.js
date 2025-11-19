import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio website', () => {
    render(<App />);
    const linkElement = screen.getByText(/portfolio/i);
    expect(linkElement).toBeInTheDocument();
});
