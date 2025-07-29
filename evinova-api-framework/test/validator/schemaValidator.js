const Ajv = require('ajv');
const addFormats = require('ajv-formats');

function validateSchema(schema, data) {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    throw new Error(JSON.stringify(validate.errors, null, 2));
  }
}

module.exports = { validateSchema };
