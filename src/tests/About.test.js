import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utility/renderWithRouter';
import About from '../pages/About';

describe('Testa o componente <About.js />', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const checkAbout = screen.getByText(/This application simulates a Pokédex/i);
    expect(checkAbout).toBeInTheDocument();
  });

  test('A página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const checkHeading = screen.getByRole('heading', { name: /about pokédex/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('A página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragraph2 = screen.getByText(/One can filter Pokémon by type/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('A página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const checkImage = screen.getByRole('img', { name: /pokédex/i });
    expect(checkImage).toBeInTheDocument();
    expect(checkImage.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
