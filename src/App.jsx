import { TypewriterProvider } from './contexts/typewriterContext';
import Spa from './page/SinglePageApplication';
import './App.css';

function App() {
  return (
    <TypewriterProvider>
      <div className="App">
        <Spa />
      </div>
    </TypewriterProvider>
  );
}

export default App;
