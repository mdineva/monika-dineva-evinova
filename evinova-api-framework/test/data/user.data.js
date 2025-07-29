import { faker } from '@faker-js/faker';

export const validUser = {
  name: faker.person.firstName(),
  job: faker.person.jobTitle(),
};

export const malformedUser = {
  name: 12345,
};