import { Main, Text } from './components/Text';
import { Generator } from './components/Generator';

const style = {
  color: 'red',
  backgroundColor: 'black',
}

// const App = () => {
function App() {
  return (
    <div className="App">

      <Generator />

      {/* <Main>
        <div className=''>
          <Text>Lorem ipsum</Text>
        </div>
      </Main> */}
    </div>
  );
}

export default App;
