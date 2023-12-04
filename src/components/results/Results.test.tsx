import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from "./Results";

test('renders learn react link', () => {
    render(<Results />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
