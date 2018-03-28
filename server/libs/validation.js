const Joi = require("joi");


module.exports = function validate(datas, rules, res, req) {
  const schema = Joi.object().keys(rules);
  const { error, value } = Joi.validate(datas, schema, {
    abortEarly: false
  });
  let dataError = {};
  if (error !== null) {
    for (let i = 0; i < error.details.length; i++) {
      dataError[error.details[i].path] = error.details[i].message;
    }
  }
  return dataError;
}