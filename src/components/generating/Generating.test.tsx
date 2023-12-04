import React from 'react';
import { render, screen } from '@testing-library/react';
import Generating from "./Generating";

test('renders learn react link', () => {
    render(<Generating />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
