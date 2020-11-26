import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('if receive "" should return ""', () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });

  test('if receive one letter, should return capitalize letter', () => {
    expect(toCapitalizeFirstLetter('g')).toBe('G');
  });

  test('if receive 2 and more letters should convert first letter to capital and other to lower', () => {
    expect(toCapitalizeFirstLetter('o My Zsh')).toBe('O my zsh');
  });
});
