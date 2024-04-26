import { useContext } from 'react'
import { MyContext } from './context';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import Initial from './components/Initial';
import Confirm from './components/Confirm';
import Result from './components/Result';

const App = () => {
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    if(screen === 0 ) return <Initial/>
    if(screen === 1 ) return <Confirm/>
    if(screen === 2 ) return <Result/>
  }

  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={context.state.screen}
            timeout={500}
            classNames="fade"
          >
            {handleComponent()}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <ToastContainer position='top-left'/>
    </div>

  );
}

export default App;