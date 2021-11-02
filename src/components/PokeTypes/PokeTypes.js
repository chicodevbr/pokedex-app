const PokeTypes = (props) => {
  return (
    <div>
      <h3 className={`font-medium text-lg mt-8 mb-2`}>Type</h3>
      <p>{props.types}</p>
    </div>
  );
};

export default PokeTypes;
