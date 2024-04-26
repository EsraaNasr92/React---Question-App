import './assets/App.css';
import Initial from './components/Initial';
import Confirm from './components/Confirm';
import Result from './components/Result';

const App = () => {

  const handleComponent = () => {
    const screen = 0;
    if(screen === 0) return <Initial />
    if(screen === 1) return <Confirm />
    if(screen === 2) return <Result />

  }

  return (
    <div className='container'>
        {handleComponent()}
    </div>
  );

}

export default App;
