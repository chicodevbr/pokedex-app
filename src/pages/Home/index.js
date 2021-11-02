import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../../components/PokeCard/PokeCard';
import { BASE_URL } from '../../api/PokesService';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon`).then((response) => {
      setPokes(response.data);
    });
  }, []);

  return (
    <div className="container p4 flex flex-row flex-wrap items-center justify-center">
      {pokes.map((poke) => {
        return (
          <PokeCard
            key={poke._id}
            image={poke.image}
            onClick={() => {
              history.push(`/pokemon/${poke._id}`);
            }}
            name={poke.name}
            type={poke.type}
          />
        );
      })}
    </div>
  );
};

export default Home;
