const { getUsers } = require('../api/users.api.js');
const schema = require('../schemas/user.schema.json');
const { validateSchema } = require('../validator/schemaValidator');

describe('GET /api/users', () => {
    it('should return list of users and match schema', async () => {
        const usersResponse = await getUsers();
        //console.log('API response:', usersResponse.body);
        expect(usersResponse.statusCode).toBe(200);
        expect(() => validateSchema(schema, usersResponse.body)).not.toThrow();
        expect(Array.isArray(usersResponse.body.data)).toBe(true);
    });
});

