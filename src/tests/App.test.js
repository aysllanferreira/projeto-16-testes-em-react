import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utility/renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  test('É exibido na tela um link com o texto Home', () => {
    renderWithRouter(<App />);
    const checkHome = screen.getByRole('link', { name: /home/i });
    expect(checkHome).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto About', () => {
    renderWithRouter(<App />);
    const checkAbout = screen.getByRole('link', { name: /about/i });
    expect(checkAbout).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const checkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(checkFavorite).toBeInTheDocument();
  });
});
