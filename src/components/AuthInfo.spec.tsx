import { render ,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthInfo } from './AuthInfo';
import { AuthProvider } from './AuthProvider';

describe('<AuthInfo />', () => {
  it('should display correct label', () => {
    render(<AuthProvider><AuthInfo /></AuthProvider>);
    expect(screen.getByText(/Logged in: NO/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Logged in: YES/i)).toBeInTheDocument();
  });
});