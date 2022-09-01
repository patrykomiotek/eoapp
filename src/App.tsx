import './App.css';
import { useRef } from 'react';
import { Main, Text } from './components/Text';
import { Generator } from './components/Generator';
import { LoginForm } from './components/LoginForm';
import { Counter } from './components/Counter';
import { useViewPort } from './hooks/useViewPort';
import { MagicButton } from './components/MagicButton';

const style = {
  color: 'red',
  backgroundColor: 'black',
}

// const App = () => {
function App() {
  const size = useViewPort();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.border = '1px solid red';
    }
  }

  return (
    <div className="App">

      <MagicButton
        ref={buttonRef}
        handleMouseEnter={handleButtonMouseEnter}>
        Click me
      </MagicButton>
      {/* <Counter /> */}
      {/* X: {size.x} Y: {size.y} */}
      {/* <LoginForm /> */}
      {/* <Generator /> */}

      {/* <Main>
        <div className=''>
          <Text>Lorem ipsum</Text>
        </div>
      </Main> */}
    </div>
  );
}

export default App;
