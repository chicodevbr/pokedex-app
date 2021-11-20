import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';

const ChartBar = (props) => {
  const dataSource = [
    { day: 'Attack', oranges: props.attack },
    { day: 'Defense', oranges: props.defense },
    { day: 'HP', oranges: props.hp },
    { day: 'Speed', oranges: props.speed },
    { day: 'S. Atk', oranges: props.speedAttack },
    { day: 'S. Def', oranges: props.speedDefense },
  ];
  return (
    <Chart id="chart" dataSource={dataSource}>
      <Series
        valueField="oranges"
        argumentField="day"
        name="Stats"
        type="bar"
        color="#3B82F6"
      />
    </Chart>
  );
};

export default ChartBar;
