import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';

import { LoginForm } from './LoginForm';

describe('<LoginForm /> component', () => {
  it('should display error message after submit', () => {
    // 1. Render component
    render(<LoginForm />);

    screen.getByRole('textbox', { name: 'E-mail' });
    // screen.getByRole('textbox', { name: 'Password' });
    const buttonElem = screen.getByRole('button');
    userEvent.click(buttonElem);

    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
  });

  it('should send form without error', () => {
    render(<LoginForm />);

    userEvent.type(
      screen.getByRole('textbox', { name: 'E-mail' }),
      'jan@wp.pl',
    );
    // userEvent.type(
    //   screen.getByRole('textbox', { name: 'Password' }),
    //   'dsfsdfsd',
    // );

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByText('Email is invalid')).not.toBeInTheDocument();
  });
});

