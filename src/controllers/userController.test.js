const userController = require('./userController');
const userService = require('../services/userService');

jest.mock('../services/userService');

describe('Testes do userController', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  test('Deve retornar status 200 e lista de usuários', () => {
    const req = {};
    const res = mockResponse();
    const fakeUsers = [{ id: 1, name: 'Gabriel' }];
    userService.getAllUsers.mockReturnValue(fakeUsers);

    userController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakeUsers);
  });

  test('Deve retornar 404 quando o usuário não existe', () => {
    const req = { params: { id: 999 } };
    const res = mockResponse();
    userService.getUserById.mockReturnValue(undefined);

    userController.getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário não encontrado' });
  });
});
