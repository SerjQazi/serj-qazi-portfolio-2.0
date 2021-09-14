import './styles/styles.scss';

import FooterComponent from './components/FooterComponent';
import NavComponent from './components/NavComponent';
import IntroComponent from './components/IntroComponent';

function App() {
  return (
    <main>

      <div className="leftSide">
        <NavComponent/>
        <div className="intro">
          <IntroComponent/>
        </div>
        <FooterComponent/>
      </div>

      <div className="rightSide">

      </div>
    </main>
  );
}

export default App;
