import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthInfo } from './AuthInfo';
import { AuthProvider } from './AuthProvider';

describe('<AuthInfo /> component', () => {
  it('should display default text', () => {
    render(
      <AuthProvider>
        <AuthInfo />
      </AuthProvider>,
    );

    expect(screen.getByText('Logged in: No')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Logged in: YES')).toBeInTheDocument();
  });
});
