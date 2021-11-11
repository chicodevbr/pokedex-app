import Card from '../UI/Card';
import classes from './PokeWeaknesses.module.css';

const PokeWeaknesses = (props) => {
  return (
    <div>
      <h3 className={`font-medium text-lg mt-8 mb-2`}>Weaknesses</h3>
      <div className={`flex flex-row flex-wrap space-x-2`}>
        {props.firstWeaknesses === 'Grass' && (
          <Card style={classes.grass}>
            <span>{props.firstWeaknesses}</span>
          </Card>
        )}
        {props.firstWeaknesses === 'Poison' && (
          <Card style={classes.poison}>{props.firstWeaknesses}</Card>
        )}
        {props.firstWeaknesses === 'Fire' && (
          <Card style={classes.fire}>{props.firstWeaknesses}</Card>
        )}
        {props.firstWeaknesses === 'Psychic' && (
          <Card style={classes.psychic}>{props.firstWeaknesses}</Card>
        )}
        {props.firstWeaknesses === 'Ice' && (
          <Card style={classes.ice}>{props.firstWeaknesses}</Card>
        )}

        {props.secondWeaknesses === 'Grass' && (
          <Card style={classes.grass}>{props.secondWeaknesses}</Card>
        )}
        {props.secondWeaknesses === 'Poison' && (
          <Card style={classes.poison}>{props.secondWeaknesses}</Card>
        )}
        {props.secondWeaknesses === 'Fire' && (
          <Card style={classes.fire}>{props.secondWeaknesses}</Card>
        )}
        {props.secondWeaknesses === 'Psychic' && (
          <Card style={classes.psychic}>{props.secondWeaknesses}</Card>
        )}
        {props.secondWeaknesses === 'Ice' && (
          <Card style={classes.ice}>{props.secondWeaknesses}</Card>
        )}

        {props.thirdWeaknesses === 'Grass' && (
          <Card style={classes.grass}>{props.thirdWeaknesses}</Card>
        )}
        {props.thirdWeaknesses === 'Poison' && (
          <Card style={classes.poison}>{props.thirdWeaknesses}</Card>
        )}
        {props.thirdWeaknesses === 'Fire' && (
          <Card style={classes.fire}>{props.thirdWeaknesses}</Card>
        )}
        {props.thirdWeaknesses === 'Psychic' && (
          <Card style={classes.psychic}>{props.thirdWeaknesses}</Card>
        )}
        {props.thirdWeaknesses === 'Ice' && (
          <Card style={classes.ice}>{props.thirdWeaknesses}</Card>
        )}

        {props.fourthWeaknesses === 'Grass' && (
          <Card style={classes.grass}>{props.fourthWeaknesses}</Card>
        )}
        {props.fourthWeaknesses === 'Poison' && (
          <Card style={classes.poison}>{props.fourthWeaknesses}</Card>
        )}
        {props.fourthWeaknesses === 'Fire' && (
          <Card style={classes.fire}>{props.fourthWeaknesses}</Card>
        )}
        {props.fourthWeaknesses === 'Psychic' && (
          <Card style={classes.psychic}>{props.fourthWeaknesses}</Card>
        )}
        {props.fourthWeaknesses === 'Ice' && (
          <Card style={classes.ice}>{props.fourthWeaknesses}</Card>
        )}
      </div>
    </div>
  );
};

export default PokeWeaknesses;
