import { forwardRef, ForwardedRef } from 'react';
import type { MouseEventHandler } from 'react';

type LoginButtonProps = {
  handleMouseOver: MouseEventHandler<HTMLButtonElement>
}

const  LoginButton = forwardRef(
  ({ handleMouseOver }: LoginButtonProps,
    ref: ForwardedRef<HTMLButtonElement>) => {

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {

    }

    return (
      <button
        ref={ref}
        onMouseOver={handleMouseOver}
        onClick={handleClick}>
          Click me
      </button>
    );
});

export { LoginButton };
