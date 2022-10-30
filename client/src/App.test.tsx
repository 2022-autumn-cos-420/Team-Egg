import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Test", () => { 
    test('renders blackbear square text', () => {
      render(<App />);
      const linkElement = screen.getByText(/BlackBear Square/i);
      expect(linkElement).toBeInTheDocument();
    });
});
