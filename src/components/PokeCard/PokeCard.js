const PokeCard = (props) => {
  return (
    <div
      className={`shadow-lg p-4 m-2 w-96 h-auto cursor-pointer
                  flex flex-col items-center justify-center 
                  font-semibold`}
    >
      <img
        className={`m-8 bg-gray-100`}
        src={props.image}
        alt="pokemons"
        onClick={props.onClick}
      />
      <p>{props.name}</p>
      <p>{props.type}</p>
    </div>
  );
};

export default PokeCard;
