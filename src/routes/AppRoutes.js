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
          <Route path="/pokemon/login" component={Login} />
          <Route path="/pokemon/signup" component={SignUp} />
          <Route path="/pokemon/dashboard" component={Dashborad} />
          <Route path="/pokemon/add" component={AddPoke} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
