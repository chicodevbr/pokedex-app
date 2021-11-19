import './ChartList.css';

const ChartList = (props) => {
  return (
    <div className="classList">
      <ul>
        <li>HP {props.hp}</li>
        <li>ATTACK {props.attack}</li>
        <li>DEFENSE {props.defense}</li>
        <li>SPEED {props.speed}</li>
      </ul>
    </div>
  );
};

export default ChartList;
