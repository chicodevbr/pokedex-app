import classes from './PokeTypes.module.css';

import Card from '../UI/Card';

const PokeTypes = (props) => {
  return (
    <div>
      <h3 className={`font-medium text-lg mt-8 mb-2`}>Type</h3>
      <div className={`flex flex-row flex-wrap space-x-2 mb-2`}>
        {props.firstType === 'Grass' && (
          <Card style={classes.grass}>{props.firstType}</Card>
        )}
        {props.firstType === 'Poison' && (
          <Card style={classes.poison}>{props.firstType}</Card>
        )}
        {props.firstType === 'Fire' && (
          <Card style={classes.fire}>{props.firstType}</Card>
        )}
        {props.firstType === 'Psychic' && (
          <Card style={classes.psychic}>{props.firstType}</Card>
        )}
        {props.firstType === 'Ice' && (
          <Card style={classes.ice}>{props.firstType}</Card>
        )}

        {props.secondType === 'Grass' && (
          <Card style={classes.grass}>{props.secondType}</Card>
        )}
        {props.secondType === 'Poison' && (
          <Card style={classes.poison}>{props.secondType}</Card>
        )}
        {props.secondType === 'Fire' && (
          <Card style={classes.fire}>{props.secondType}</Card>
        )}
        {props.secondType === 'Psychic' && (
          <Card style={classes.psychic}>{props.secondType}</Card>
        )}
        {props.secondType === 'Ice' && (
          <Card style={classes.ice}>{props.secondType}</Card>
        )}
      </div>
    </div>
  );
};

export default PokeTypes;
