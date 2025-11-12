const userService = require('./userService');

describe('Testes do userService', () => {
  test('Deve retornar uma lista de usuários', () => {
    const result = userService.getAllUsers();
    expect(Array.isArray(result)).toBe(true);
  });

  test('Deve retornar um usuário pelo ID', () => {
    const result = userService.getUserById(1);
    expect(result).toHaveProperty('id', 1);
  });
});
