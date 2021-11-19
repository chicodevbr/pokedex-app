import Background from '../UI/Background';
import classes from './Chart.module.css';

import ChartList from './ChartList/ChartList';

const Chart = (props) => {
  const hp = props.hp;
  const attack = props.attack;
  const defense = props.defense;
  const speed = props.speed;
  return (
    <Background style={classes['stats-info-pokes']}>
      <ChartList hp={hp} attack={attack} defense={defense} speed={speed} />
    </Background>
  );
};

export default Chart;
