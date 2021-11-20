import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/PokesService';

import PokeInfos from '../../components/PokeInfos/PokeInfos';
import PokeTypes from '../../components/PokeTypes/PokeTypes';
import Card from '../../components/UI/Card';
import PokeWeaknesses from '../../components/PokeWeaknesses/PokeWeaknesses';

import ChartBar from '../../components/Chart/Chart';

const PokeDetails = () => {
  const { id } = useParams();

  const [poke, setPoke] = useState([]);

  useEffect(() => {
    getDataById(id);
  }, [id]);

  const getDataById = (id) => {
    axios.get(`${BASE_URL}/pokemon/${id}`).then((response) => {
      setPoke(response.data);
    });
  };

  return (
    <div
      className={`shadow-lg p-4 m-2 min-w-full h-auto 
    flex flex-col items-center justify-center`}
    >
      <h1 className={`font-medium text-4xl mb-10`}>
        {poke.name} <span>Nº{poke.dexnumber}</span>
      </h1>
      <div className={`flex flex-row flex-wrap space-x-10`}>
        <img
          className={`bg-gray-100 rounded`}
          src={poke.image}
          alt={poke.name}
        />
        <section className={`flex flex-col items-start justify-center`}>
          <Card style={`mb-12 w-96`}>{poke.description}</Card>

          <PokeInfos
            abilities={poke.abilities}
            weight={poke.weight}
            height={poke.height}
          />
          <PokeTypes firstType={poke.firstType} secondType={poke.secondType} />
          <PokeWeaknesses
            firstWeaknesses={poke.firstWeaknesses}
            secondWeaknesses={poke.secondWeaknesses}
            thirdWeakness={poke.thirdWeakness}
            fourthWeaknesses={poke.fourthWeaknesses}
          />
        </section>
      </div>
      <div className={`max-w-screen-sm mt-10 bg-gray-200 p-7`}>
        <ChartBar
          hp={poke.hp}
          attack={poke.attack}
          defense={poke.defense}
          speed={poke.speed}
          speedAttack={poke.speedAttack}
          speedDefense={poke.speedDefense}
        />
      </div>
    </div>
  );
};

export default PokeDetails;
