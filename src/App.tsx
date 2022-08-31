import './App.css';
import { Main, Text } from './components/Text';
import { Generator } from './components/Generator';
import { LoginForm } from './components/LoginForm';

const style = {
  color: 'red',
  backgroundColor: 'black',
}

// const App = () => {
function App() {
  return (
    <div className="App">

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
