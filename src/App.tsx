import './App.css';
import { Main, Text } from './components/Text';
import { Generator } from './components/Generator';
import { LoginForm } from './components/LoginForm';
import { Counter } from './components/Counter';
import { useViewPort } from './hooks/useViewPort';

const style = {
  color: 'red',
  backgroundColor: 'black',
}

// const App = () => {
function App() {
  const size = useViewPort();
  return (
    <div className="App">

      {/* <Counter /> */}
      X: {size.x} Y: {size.y}
      <LoginForm />
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
