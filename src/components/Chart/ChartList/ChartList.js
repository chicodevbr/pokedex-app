import './ChartList.css';

const ChartList = (props) => {
  return (
    <div className="classList">
      <ul>
        <li>{props.children}</li>
        <li>{props.children}</li>
        <li>{props.children}</li>
        <li>{props.children}</li>
        <li>{props.children}</li>
        <li>{props.children}</li>
      </ul>
    </div>
  );
};

export default ChartList;
