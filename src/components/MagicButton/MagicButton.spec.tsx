import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MagicButton } from './MagicButton';

describe('<MagicButton /> component', () => {
  it('should render MagicButton without errors', () => {
    const clickHandler = jest.fn();

    render(<MagicButton handleMouseEnter={clickHandler}>I am awesome button</MagicButton>);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('I am awesome button')).toBeInTheDocument();
  });
});