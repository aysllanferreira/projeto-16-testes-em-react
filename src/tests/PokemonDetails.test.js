import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utility/renderWithRouter';
import App from '../App';

describe('Testa o componente <PokemonDetails.js />', () => {
  test('A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkHeading = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('Não deve existir o link de navegação para os detalhes do Pokémon selecionado', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkDetails = screen.queryByRole('link', { name: /More details/i });
    expect(checkDetails).not.toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkHeading = screen.getByRole('heading', { name: /Summary/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkParagraph = screen.getByText(/This intelligent Pokémon/i);
    expect(checkParagraph).toBeInTheDocument();
  });

  test('Na seção de detalhes deverá existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkHeading = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkParagraph = screen.getByText(/Kanto Viridian Forest/i);
    expect(checkParagraph).toBeInTheDocument();
  });

  test('Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkParagraph = screen.getByText(/Kanto Viridian Forest/i);
    expect(checkParagraph).toBeInTheDocument();
    const checkAltText = screen.getAllByAltText(/Pikachu location/i);
    const verifySrc = checkAltText.map((element) => element.src);
    expect(verifySrc).toEqual([
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    ]);
  });

  test('A imagem da localização deve ter um atributo alt com o texto <name> location, onde <name> é o nome do Pokémon.', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkAltText = screen.getAllByAltText(/Pikachu location/i);
    expect(checkAltText).toHaveLength(2);
  });

  test('A página deve exibir um checkbox que permite favoritar o Pokémon', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkCheckbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(checkCheckbox).toBeInTheDocument();
  });

  test('Cliques alternados no checkbox devem adicionar e remover respectivamente o Pokémon da lista de favoritos;', () => {
    renderWithRouter(<App />);
    const checkLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(checkLink);
    const checkCheckbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(checkCheckbox);
    const checkImg = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(checkImg).toBeInTheDocument();
    userEvent.click(checkCheckbox);
    const checkImg2 = screen.queryByAltText(/Pikachu is marked as favorite/i);
    expect(checkImg2).not.toBeInTheDocument();
  });
});
