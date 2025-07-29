const { createUser } = require('../api/users.api.js');
const { faker } = require('@faker-js/faker');

describe('POST /api/users with faker', () => {
  it('should create a user with dynamic faker data', async () => {
    const newUser = {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
    };

    const user = await createUser(newUser);

    expect(user.statusCode).toBe(201);
    expect(user.body.name).toBe(newUser.name);
    expect(user.body.job).toBe(newUser.job);
    expect(user.body).toHaveProperty('id');
    expect(user.body).toHaveProperty('createdAt');
  });

  it('when create a user with invalid data, should return an error', async () => {
    const invalidUserPayload = {
      name: 12345,
      job: null,
      extraField: 'Extra field',
    };

    const user = await createUser(invalidUserPayload);

    expect(user.statusCode).toBe(400);
    expect(user.body).toHaveProperty('error');
  });

});
