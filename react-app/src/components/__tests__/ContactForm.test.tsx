import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('shows validation errors when submitted empty', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Please enter your name')).toBeInTheDocument();
    expect(screen.getByText('Please enter your email')).toBeInTheDocument();
    expect(screen.getByText('Please enter a message')).toBeInTheDocument();
  });

  it('submits successfully with valid data', async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText('Name'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('E-mail'), 'jane@example.com');
    await user.type(screen.getByPlaceholderText('Your text'), 'Hello there!');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByRole('status')).toHaveTextContent('Thanks!');
  });
});
