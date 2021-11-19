import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AddPoke from '../components/AddPoke/AddPoke';
import Dashborad from '../components/Dashboard/Dashborad';
import Login from '../components/Auth/Login';
import Home from '../pages/Home';
import PokemonDetails from '../pages/Pokmeon';
import SignUp from '../components/Auth/Signup';
import NavBar from '../components/NavBar';

const AppRoutes = () => {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashborad} />
          <Route path="/add" component={AddPoke} />
          <Route path="/:id" component={PokemonDetails} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
