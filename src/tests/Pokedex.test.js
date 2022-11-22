import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utility/renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const checkHeading = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const checkButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    for (let index = 0; index < 5; index += 1) {
      userEvent.click(checkButton);
    }
    const checkPokemon = screen.getByText(/Mew/i);
    expect(checkPokemon).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const checkPokemon = screen.getAllByText(/Pikachu/i);
    expect(checkPokemon.length).toBe(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const checkAllButton = screen.getByRole('button', { name: /All/i });
    expect(checkAllButton).toBeInTheDocument();
    const checkElectricButton = screen.getByRole('button', { name: /Electric/i });
    expect(checkElectricButton).toBeInTheDocument();
    const checkFireButton = screen.getByRole('button', { name: /Fire/i });
    expect(checkFireButton).toBeInTheDocument();
    const checkBugButton = screen.getByRole('button', { name: /Bug/i });
    expect(checkBugButton).toBeInTheDocument();
    const checkPoisonButton = screen.getByRole('button', { name: /Poison/i });
    expect(checkPoisonButton).toBeInTheDocument();
    const checkPsychicButton = screen.getByRole('button', { name: /Psychic/i });
    expect(checkPsychicButton).toBeInTheDocument();
    const checkNormalButton = screen.getByRole('button', { name: /Normal/i });
    expect(checkNormalButton).toBeInTheDocument();
    const checkDragonButton = screen.getByRole('button', { name: /Dragon/i });
    expect(checkDragonButton).toBeInTheDocument();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const checkResetButton = screen.getByRole('button', { name: /All/i });
    expect(checkResetButton).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const checkAllButton = screen.getByRole('button', { name: /All/i });
    expect(checkAllButton).toBeInTheDocument();
    const checkButtons = screen.getAllByTestId('pokemon-type-button');
    expect(checkButtons.length).toBe(7);
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const checkAllButton = screen.getByRole('button', { name: /All/i });
    expect(checkAllButton).toBeInTheDocument();
    userEvent.click(checkAllButton);
    const checkPokemon = screen.getByText(/Pikachu/i);
    expect(checkPokemon).toBeInTheDocument();
  });
});
