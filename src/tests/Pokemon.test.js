import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utility/renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    const checkPokemon = screen.getByText(/Pikachu/i);
    expect(checkPokemon).toBeInTheDocument();
    const checkType = screen.getByTestId('pokemon-type');
    expect(checkType).toBeInTheDocument();
    const checkWeight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(checkWeight).toBeInTheDocument();
    const checkImage = screen.getByAltText(/Pikachu sprite/i);
    expect(checkImage).toBeInTheDocument();
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon.', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    expect(checkLink).toBeInTheDocument();
    expect(checkLink.href).toBe('http://localhost/pokemon/25');
  });

  test('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkHeading = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const { pathname } = window.location;
    expect(pathname).toBe('/');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados, O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkFavorite = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(checkFavorite);
    const checkStar = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(checkStar).toBeInTheDocument();
    expect(checkStar.src).toBe('http://localhost/star-icon.svg');
  });

  test('Testa a imagem do pokemon', () => {
    renderWithRouter(<App />);
    const checkImage = screen.getByAltText(/Pikachu sprite/i);
    expect(checkImage).toBeInTheDocument();
    expect(checkImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const checkType = screen.getByTestId('pokemon-type');
    expect(checkType).toBeInTheDocument();
    expect(checkType.innerHTML).toBe('Electric');
  });
});
