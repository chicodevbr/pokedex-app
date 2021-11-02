import React from 'react';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <React.Fragment>
      <NavBar>Pokedex</NavBar>
      <AppRoutes />
    </React.Fragment>
  );
}
