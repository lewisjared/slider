/* eslint react/no-multi-comp: 0, max-len: 0 */
import '../assets/index.less';

import React from 'react';
import Slider from '../src';

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

const BasicSlider = () => {
  const Step = props => {
    return <span {...props} onFocus={log} />;
  };
  return (
    <Slider
      StepElement={Step}
      marks={{
        10: '10',
        20: '20',
      }}
    />
  );
};

export default () => (
  <div>
    <div style={style}>
      <p>Basic Slider</p>
      <Slider onChange={log} />
    </div>
    <div style={style}>
      <p>Basic Slider, `startPoint=50`</p>
      <BasicSlider onChange={log} startPoint={50} />
    </div>
  </div>
);
