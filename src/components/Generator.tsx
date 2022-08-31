import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Button } from './Button';

export const Generator = () => {
  const [id, setId] = useState(uuidv4()); // [0: value, 1: setter]
  const [color, setColor] = useState('red'); // this.setState({})
  const [state, setState] = useState({
    id: '',
    color: 'red'
  });
  // setState({
  //   ...state,
  //   color: 'blue',
  // });

  // let id = uuidv4();
  const handleClick = () => {
    // state[1]('aaaaa');
    setId(uuidv4());
  }

  return (
    <div>
      <div>
        UUID: {id}
      </div>
      <Button label='Refresh' onClick={handleClick} />

      {/* <button onClick={() => handleClick()}>Click me</button> */}
      {/* <button onClick={() => handleClick(123)}>Click me</button> */}

      {/* <button onClick={handleClick()}>Click me</button> */}
    </div>
  );
}