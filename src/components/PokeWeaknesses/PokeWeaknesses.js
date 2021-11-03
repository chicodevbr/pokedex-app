const PokeWeaknesses = (props) => {
  return (
    <div>
      <h3 className={`font-medium text-lg mt-8 mb-2`}>Weaknesses</h3>
      <p>{props.weaknesses}</p>
    </div>
  );
};

export default PokeWeaknesses;
