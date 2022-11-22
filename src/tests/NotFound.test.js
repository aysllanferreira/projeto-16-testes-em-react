import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testa o componente NotFound.js', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    const { getByRole } = render(<NotFound />);
    const checkHeading = getByRole('heading', { name: /page requested not found/i });
    expect(checkHeading).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { getByRole } = render(<NotFound />);
    const checkImage = getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    expect(checkImage).toBeInTheDocument();
    expect(checkImage.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
