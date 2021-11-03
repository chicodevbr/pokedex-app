import React, { useState } from 'react';
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
      type: { first: '', second: '' },
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      speedAttack: '',
      speedDefense: '',
      height: '',
      weight: '',
      weaknesses: { first: '', second: '', third: '', fourth: '' },
      abilities: '',
      evolution: { first: '', second: '', third: '' },
      image: '',
    },
    async onSubmit(values) {
      const body = {
        dexnumber: values.dexnumber,
        name: values.name,
        description: values.description,
        type: { first: values.type.first, second: values.type.second },
        hp: values.hp,
        attack: values.attack,
        defense: values.defense,
        speed: values.speed,
        speedAttack: values.speedAttack,
        speedDefense: values.speedDefense,
        height: values.height,
        weight: values.weight,
        weaknesses: {
          first: values.weaknesses.first,
          second: values.weaknesses.second,
          third: values.weaknesses.third,
          fourth: values.weaknesses.fourth,
        },
        abilities: values.abilities,
        evolution: {
          first: values.evolution.first,
          second: values.evolution.second,
          third: values.evolution.third,
        },
        image: values.image,
      };

      console.log(body);

      const response = await axios
        .post(`${BASE_URL}/pokemon`, body)
        .catch((err) => console.log(err));

      console.log(response);
      //history.push('/dashboard');
    },
  });

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
            defaultValue={formik.values.dexnumber}
            onChange={formik.handleChange}
          />
          <Input
            label="Name"
            type="text"
            name="name"
            id="name"
            defaultValue={formik.values.name}
            onChange={formik.handleChange}
          />

          <Input
            label="description"
            type="text"
            name="description"
            id="description"
            defaultValue={formik.values.description}
            onChange={formik.handleChange}
          ></Input>
          <Input
            label="Type 1"
            type="text"
            id="type.first"
            name="type.first"
            defaultValue={formik.values.type.first}
            onChange={formik.handleChange}
          />
          <Input
            label="Type 2"
            type="text"
            id="type.second"
            name="type.second"
            defaultValue={formik.values.type.second}
            onChange={formik.handleChange}
          />
          <Input
            label="hp"
            type="text"
            id="hp"
            name="hp"
            defaultValue={formik.values.hp}
            onChange={formik.handleChange}
          />

          <Input
            label="Attack"
            type="text"
            id="attack"
            name="attack"
            defaultValue={formik.values.attack}
            onChange={formik.handleChange}
          />
          <Input
            label="Defense"
            type="text"
            id="defense"
            name="defense"
            defaultValue={formik.values.defense}
            onChange={formik.handleChange}
          />
          <Input
            label="SpeedAttack"
            type="text"
            id="speedAttack"
            name="speedAttack"
            defaultValue={formik.values.speedAttack}
            onChange={formik.handleChange}
          />
          <Input
            label="SpeedDefense"
            type="text"
            id="speedDefense"
            name="speedDefense"
            defaultValue={formik.values.speedDefense}
            onChange={formik.handleChange}
          />
          <Input
            label="Speed"
            type="text"
            id="speed"
            name="speed"
            defaultValue={formik.values.speed}
            onChange={formik.handleChange}
          />
          <Input
            label="Height"
            type="text"
            id="height"
            name="height"
            defaultValue={formik.values.height}
            onChange={formik.handleChange}
          />
          <Input
            label="Weight"
            type="text"
            id="weight"
            name="weight"
            defaultValue={formik.values.weight}
            onChange={formik.handleChange}
          />
          <Input
            label="Abilities"
            type="text"
            id="abilities"
            name="abilities"
            defaultValue={formik.values.abilities}
            onChange={formik.handleChange}
          />
          <Input
            label="First Weaknesses"
            type="text"
            id="weaknesses.first"
            name="weaknesses.first"
            defaultValue={formik.values.weaknesses.first}
            onChange={formik.handleChange}
          />
          <Input
            label="Second Weaknesses"
            type="text"
            id="weaknesses.second"
            name="weaknesses.second"
            defaultValue={formik.values.weaknesses.second}
            onChange={formik.handleChange}
          />
          <Input
            label="Third Weaknesses"
            type="text"
            id="weaknesses.third"
            name="weaknesses.third"
            defaultValue={formik.values.weaknesses.third}
            onChange={formik.handleChange}
          />

          <Input
            label="Fourth Weaknesses"
            type="text"
            id="weaknesses.fourth"
            name="weaknesses.fourth"
            defaultValue={formik.values.weaknesses.fourth}
            onChange={formik.handleChange}
          />
          <Input
            label="1st Evolution"
            type="text"
            id="evolution.first"
            name="evolution.first"
            defaultValue={formik.values.evolution.first}
            onChange={formik.handleChange}
          />
          <Input
            label="2nd Evolution"
            type="text"
            id="evolution.second"
            name="evolution.second"
            defaultValue={formik.values.evolution.second}
            onChange={formik.handleChange}
          />
          <Input
            label="3rd Evolution"
            type="text"
            id="evolution.third"
            name="evolution.third"
            defaultValue={formik.values.evolution.third}
            onChange={formik.handleChange}
          />
          <Input
            label="Image"
            type="text"
            id="image"
            name="image"
            defaultValue={formik.values.image}
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
