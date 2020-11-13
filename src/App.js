import React from 'react';
import Towers from '../src/components/Towers';

const TOWERS_NUMBER = 3;

const App = () => (
  <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: window.innerHeight,
      width: '100%',
      backgroundColor: 'black'
    }}>
      <Towers discsNumber={3} />
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: window.innerHeight,
      width: '100%',
      backgroundColor: 'black'
    }}>
      <Towers discsNumber={3} />
    </div>
  </>
);

export default App;