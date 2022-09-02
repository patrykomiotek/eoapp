import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MagicButton } from './MagicButton';

describe('<MagicButton />', () => {
  it('should render button', () => {
    const handleMouseEnter = jest.fn();
    render(<MagicButton handleMouseEnter={handleMouseEnter}>Click me</MagicButton>);
    userEvent.click(screen.getByRole('button'));
    expect(handleMouseEnter).toHaveBeenCalled();
  });
});