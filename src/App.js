import _ from 'lodash';
import React from 'react';
import './style.css';

const TOWERS_NUMBER = 3;
const discColours = [
  'gray',
  'red',
  'green',
  'cyan',
  'yellow',
  'orange',
  'magenta',
  'blue',
];

const Disc = ({ size, topDisc, startDrag }) => {
  const discWidth = (size + 1.5) * 25;
  const discStyle = {
    width: discWidth + 'px',
    backgroundColor: discColours[size % 8],
  };

  return (
    <div
      className='disc'
      style={discStyle}
    >
      <span className='disc-label'>
        {size}
      </span>
    </div>
  );
}

const Tower = ({ towerDiscs, maxSize, startTopDiscDrag, dropDisc }) => {
  const towerStyle = { width: (maxSize + 3) * 25 };
  const pillarStyle = { height: 100 + maxSize * 20 };

  return (
    <div
      className='tower'
      style={towerStyle}
    >
      <div className='tower-pillar' style={pillarStyle} />
      <div className='tower-base' />
      <div className='disc-group'>
        {towerDiscs.map((size, i) =>
          <Disc
            key={size.toString()}
            size={size}
            topDisc={i === 0}
          />
        )}
      </div>
    </div>
  );
};

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let startTower = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = { discs };
  }

  render() {
    return (
      <div>
        {this.state.discs.map((towerDiscs, i) =>
          <Tower
            key={i + 1}
            towerDiscs={towerDiscs}
            maxSize={this.props.discsNumber}
            startTopDiscDrag={() => this.startTopDiscDrag(i)}
            dropDisc={() => this.dropDisc(i)}
          />
        )}
      </div>
    );
  }
}

const App = () => (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight, width: '100%', backgroundColor: 'darkblue'}}>
    <Towers discsNumber={7} />
  </div>
);

export default App;