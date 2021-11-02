import Card from '../UI/Card';
import classes from './PokemonInfos.module.css';

const PokeInfos = (props) => {
  return (
    <Card style={`bg-blue-500 p-4 w-96 rounded`}>
      <ul className={classes.items}>
        <li className={classes.display}>
          <span className={classes.title}>Height</span>
          <span>{props.height}</span>
        </li>
        <li className={classes.display}>
          <span className={classes.title}>Weight</span>
          <span>{props.weight}</span>
        </li>
        <li className={classes.display}>
          <span className={classes.title}>Abilities</span>
          <span>{props.abilities}</span>
        </li>
      </ul>
    </Card>
  );
};

export default PokeInfos;
