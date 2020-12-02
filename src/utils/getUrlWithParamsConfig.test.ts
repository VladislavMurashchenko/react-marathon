import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('should receive 2 args "getPokemons" and {} and return object with pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('should receive 2 args "getPokemons" and { name: "Pikachu" } and return object with pathname, protocol, host and query { name: "Pikachu" }', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('should receive 2 args "getPokemon" and { id: 10, name: "Pikachu" } and return object with pathname, protocol, host and query { name: "Pikachu" }', () => {
    const url = getUrlWithParamsConfig('getPokemon', {
      id: 10,
      name: 'Pikachu',
    });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/10',
      query: { name: 'Pikachu' },
    });
  });
});
