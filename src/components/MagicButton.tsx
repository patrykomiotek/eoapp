import { forwardRef } from 'react';
import type {  MouseEventHandler, ForwardedRef } from 'react';

type Props = {
  children: string;
  handleMouseEnter: MouseEventHandler<HTMLButtonElement>
}

export const MagicButton = forwardRef(
  ({ children, handleMouseEnter }: Props,
  ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </button>
  );
});

