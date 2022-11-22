import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utility/renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemon';
import App from '../App';

describe('Testa o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const checkMessage = screen.getByText(/No favorite Pokémon found/i);
    expect(checkMessage).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(checkLink);
    const checkFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(checkFavorite);
    const checkFavoriteLink = screen.getByRole('link', { name: /Favorite Pokémon/i });
    userEvent.click(checkFavoriteLink);
    const checkPokemon = screen.getByText(/Pikachu/i);
    expect(checkPokemon).toBeInTheDocument();
  });
});
