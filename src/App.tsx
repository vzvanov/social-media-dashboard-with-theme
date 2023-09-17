import './App.css';
import PixelPerfect from './components/PixelPerfect/PixelPerfect';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { summary } from './data/summary';
import SummaryGroup from './components/SummaryGroup/SummaryGroup';
import OverviewGroup from './components/OverviewGroup/OverviewGroup';
import { overview } from './data/overview';

function App() {
  const [colorMode, setColorMode] = useState('light');

  const handleToggleColorMode = () => {
    let mode = 'dark';
    if (colorMode === 'dark') mode = 'light';
    setColorMode(mode);
    let html = document.querySelector('html');
    html?.setAttribute("color-mode", mode);
  }

  return (
    <div className="wrapper">
      {/* <PixelPerfect /> */}
      <Header
        colorMode={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        handleToggleColorMode={handleToggleColorMode}
      />
      <main className="App">
        <SummaryGroup
          summary={summary}
        />
        <h2 className="overview-title ">Overview - Today</h2>
        <OverviewGroup
          overview={overview}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
