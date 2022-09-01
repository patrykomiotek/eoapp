import { useReducer } from 'react';
import type { MouseEventHandler } from "react";

type CounterState = {
  counterValue: number;
}

enum ActionTypes {
  increase = 'INCREASE',
}

const INITIAL_STATE: CounterState = {
  counterValue: 0
}

type Action = {
  type: ActionTypes,
}

const increaseAction: Action = {
  type: ActionTypes.increase,
}

function counterReducer(state: CounterState, action: Action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.increase:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      }
    default:
      return state;
  }
}

function Clicker() {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  // const [value, setValue] = useReducer(counterReducer, 0);
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(increaseAction);
  }
  return (
    <div>
      <button onClick={handleClick}>{state.counterValue}</button>
    </div>
  );
}

export { Clicker };
