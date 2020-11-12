import _ from 'lodash';
import React from 'react';
import './style.css';
import Tower from './components/Tower';

const TOWERS_NUMBER = 3;

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let startTower = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = { discs };
  }

  startTopDiscDrag(activeTower) {
    this.activeTower = activeTower;
  }

  dropDisc(destTower) {
    const sourceTower = this.activeTower;
    this.activeTower = null;
    if (sourceTower === destTower || sourceTower === null) return;

    this.setState((state) => {
      const disc = state.discs[sourceTower][0];
      if (state.discs[destTower][0] < disc) return state;

      let discs = [...state.discs];
      discs[sourceTower] = _.tail(discs[sourceTower]);
      discs[destTower] = [disc, ...state.discs[destTower]];
      return { discs };
    });
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
);

export default App;