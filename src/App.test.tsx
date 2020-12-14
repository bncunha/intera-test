import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Init localstorage DB', () => {
  render(<App />);
  const usuariosDB = localStorage.getItem('usuarios');
  expect(usuariosDB).toBeTruthy();
});
