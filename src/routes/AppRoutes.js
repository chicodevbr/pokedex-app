import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Route path="/pokemon/:id" component={PokemonDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashborad} />
          <Route path="/add" component={AddPoke} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
