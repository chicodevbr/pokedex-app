import Background from '../UI/Background';
import classes from './Chart.module.css';
import CharBarCol from './ChartBar/CharBarCol';
import ChartList from './ChartList/ChartList';

const Chart = (props) => {
  const hp = props.hp;
  const attack = props.attack;
  const defense = props.defense;
  const speed = props.speed;
  return (
    <Background style={classes['stats-info-pokes']}>
      <ChartList>
        <CharBarCol statsName={'HP'} />
        <CharBarCol />
        <CharBarCol />
        <CharBarCol />
        <CharBarCol />
        <CharBarCol />
        <CharBarCol />
      </ChartList>
    </Background>
  );
};

export default Chart;
