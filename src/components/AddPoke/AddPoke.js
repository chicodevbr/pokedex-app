import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import axios from 'axios';
import { BASE_URL } from '../../api/PokesService';
import { useHistory } from 'react-router';

const AddPoke = () => {
  const history = useHistory();
  const [dexnumber, SetDexnumber] = useState();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState([]);
  const [hp, setHp] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [speedAttack, setSpeedAttack] = useState('');
  const [speedDefense, setSpeedDefense] = useState('');
  const [speed, setSpeed] = useState('');
  const [weaknesses, setWeaknesses] = useState([]);
  const [abilities, setAbilities] = useState('');
  const [height, setHeightPoke] = useState('');
  const [weight, setWeightPoke] = useState('');
  const [image, setImage] = useState('');

  const postData = () => {
    axios.post(`${BASE_URL}/pokemon`, {
      dexnumber,
      name,
      description,
      type,
      hp,
      attack,
      defense,
      speed,
      speedAttack,
      speedDefense,
      height,
      weight,
      weaknesses,
      abilities,
      image,
    });
    history.push('/dashboard');
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Add Pokemons
        </h1>

        <form>
          <Input
            label="NumberDex"
            type="Number"
            id="NumberDex"
            onChange={(e) => SetDexnumber(e.target.value)}
          />
          <Input
            label="Name"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            id="Description"
            name="Description"
            placeholder="Description"
            className={`border-solid border border-gray-200`}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Input
            label="Type"
            type="text"
            id="Type"
            onChange={(e) => setType(e.target.value)}
          />
          <Input
            label="HP"
            type="text"
            id="HP"
            onChange={(e) => setHp(e.target.value)}
          />
          <Input
            label="Attack"
            type="text"
            id="Attack"
            onChange={(e) => setAttack(e.target.value)}
          />
          <Input
            label="Defense"
            type="text"
            id="Defense"
            onChange={(e) => setDefense(e.target.value)}
          />
          <Input
            label="SpeedAttack"
            type="text"
            id="SpeedAttack"
            onChange={(e) => setSpeedAttack(e.target.value)}
          />
          <Input
            label="SpeedDefense"
            type="text"
            id="SpeedDefense"
            onChange={(e) => setSpeedDefense(e.target.value)}
          />
          <Input
            label="Speed"
            type="text"
            id="Speed"
            onChange={(e) => setSpeed(e.target.value)}
          />
          <Input
            label="HeightPoke"
            type="text"
            id="HeightPoke"
            onChange={(e) => setHeightPoke(e.target.value)}
          />
          <Input
            label="WeightPoke"
            type="text"
            id="WeightPoke"
            onChange={(e) => setWeightPoke(e.target.value)}
          />
          <Input
            label="Abilities"
            type="text"
            id="Abilities"
            onChange={(e) => setAbilities(e.target.value)}
          />
          <Input
            label="Weaknesses"
            type="text"
            id="Weaknesses"
            onChange={(e) => setWeaknesses(e.target.value)}
          />
          <Input
            label="Image"
            type="text"
            id="Image"
            onChange={(e) => setImage(e.target.value)}
          />
          <Button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            type="submit"
            onClick={postData}
          >
            Add Pokemon
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPoke;
