import ChartBar from './ChartBar';
import classes from './ChartBar.module.css';
const CharBarCol = (props) => {
  return (
    <>
      <ul className={props.style}>
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
        <ChartBar style={classes.inner} />
      </ul>
      <span>{props.statsName}</span>
    </>
  );
};

export default CharBarCol;
