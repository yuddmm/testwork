import './App.css';
import { FooterComponent } from './components/FooterComponent';
import { MainComponent } from './components/MainComponent';
import { AppWrapper } from './styled/AppWrapper';

function App() {
  return (
    <AppWrapper>
      <MainComponent />
      <FooterComponent />
    </AppWrapper>
  );
}

export default App;
