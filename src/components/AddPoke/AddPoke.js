import React from 'react';
import { useHistory } from 'react-router';

import Button from '../UI/Button';
import Input from '../UI/Input';

import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../api/PokesService';

const AddPoke = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      dexnumber: '',
      name: '',
      description: '',
      firstType: '',
      secondType: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      speedAttack: '',
      speedDefense: '',
      height: '',
      weight: '',
      firstWeaknesses: '',
      secondWeaknesses: '',
      thirdWeaknesses: '',
      fourthWeaknesses: '',
      abilities: '',
      firstEvolution: '',
      secondEvolution: '',
      image: '',
    },
    onSubmit: (values) => {
      console.log('Form data', values);

      axios
        .post(`${BASE_URL}/pokemon`, values)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    },
  });

  //console.log('Form values', formik.values);

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Add Pokemons
        </h1>

        <form onSubmit={formik.handleSubmit}>
          <Input
            label="NumberDex"
            type="text"
            name="dexnumber"
            id="dexnumber"
            //defaultValue={formik.values.dexnumber}
            onChange={formik.handleChange}
          />
          <Input
            label="Name"
            type="text"
            name="name"
            id="name"
            //defaultValue={formik.values.name}
            onChange={formik.handleChange}
          />

          <Input
            label="Description"
            type="text"
            name="description"
            id="description"
            //defaultValue={formik.values.description}
            onChange={formik.handleChange}
          ></Input>
          <Input
            label="First Type"
            type="text"
            id="firstType"
            name="firstType"
            //defaultValue={formik.values.type.first}
            onChange={formik.handleChange}
          />
          <Input
            label="Second Type"
            type="text"
            id="secondType"
            name="secondType"
            //defaultValue={formik.values.type.second}
            onChange={formik.handleChange}
          />
          <Input
            label="hp"
            type="text"
            id="hp"
            name="hp"
            //defaultValue={formik.values.hp}
            onChange={formik.handleChange}
          />

          <Input
            label="Attack"
            type="text"
            id="attack"
            name="attack"
            //defaultValue={formik.values.attack}
            onChange={formik.handleChange}
          />
          <Input
            label="Defense"
            type="text"
            id="defense"
            name="defense"
            //defaultValue={formik.values.defense}
            onChange={formik.handleChange}
          />
          <Input
            label="SpeedAttack"
            type="text"
            id="speedAttack"
            name="speedAttack"
            //defaultValue={formik.values.speedAttack}
            onChange={formik.handleChange}
          />
          <Input
            label="SpeedDefense"
            type="text"
            id="speedDefense"
            name="speedDefense"
            //defaultValue={formik.values.speedDefense}
            onChange={formik.handleChange}
          />
          <Input
            label="Speed"
            type="text"
            id="speed"
            name="speed"
            //defaultValue={formik.values.speed}
            onChange={formik.handleChange}
          />
          <Input
            label="Height"
            type="text"
            id="height"
            name="height"
            //defaultValue={formik.values.height}
            onChange={formik.handleChange}
          />
          <Input
            label="Weight"
            type="text"
            id="weight"
            name="weight"
            //defaultValue={formik.values.weight}
            onChange={formik.handleChange}
          />
          <Input
            label="Abilities"
            type="text"
            id="abilities"
            name="abilities"
            //defaultValue={formik.values.abilities}
            onChange={formik.handleChange}
          />
          <Input
            label="First Weaknesses"
            type="text"
            id="firstWeaknesses"
            name="firstWeaknesses"
            //defaultValue={formik.values.weaknesses.first}
            onChange={formik.handleChange}
          />
          <Input
            label="Second Weaknesses"
            type="text"
            id="secondWeaknesses"
            name="secondWeaknesses"
            //defaultValue={formik.values.weaknesses.second}
            onChange={formik.handleChange}
          />
          <Input
            label="Third Weaknesses"
            type="text"
            id="thirdWeaknesses"
            name="thirdWeaknesses"
            //defaultValue={formik.values.weaknesses.third}
            onChange={formik.handleChange}
          />

          <Input
            label="Fourth Weaknesses"
            type="text"
            id="fourthWeaknesses"
            name="fourthWeaknesses"
            //defaultValue={formik.values.weaknesses.fourth}
            onChange={formik.handleChange}
          />
          <Input
            label="1st Evolution"
            type="text"
            id="firstEvolution"
            name="firstEvolution"
            //defaultValue={formik.values.evolution.first}
            onChange={formik.handleChange}
          />
          <Input
            label="2nd Evolution"
            type="text"
            id="secondEvolution"
            name="secondEvolution"
            //defaultValue={formik.values.evolution.second}
            onChange={formik.handleChange}
          />
          <Input
            label="3rd Evolution"
            type="text"
            id="thirdEvolution"
            name="thirdEvolution"
            //defaultValue={formik.values.evolution.third}
            onChange={formik.handleChange}
          />
          <Input
            label="Image"
            type="text"
            id="image"
            name="image"
            //defaultValue={formik.values.image}
            onChange={formik.handleChange}
          />
          <Button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Add Pokemon
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPoke;
