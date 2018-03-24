const Joi = require("joi");

module.exports = (req, res) => {
  const schema = Joi.object()
    .keys({
      user: Joi.string()
        .alphanum()
        .min(4)
        .max(12)
        .required(),
      pass: Joi.string().alphanum().min(4).max(20).required(),
      repass: Joi.ref('pass'),
      // access_token: [Joi.string(), Joi.number()],
      // birthyear: Joi.number()
      //   .integer()
      //   .min(1900)
      //   .max(2013),
      // email: Joi.string().email()
    })
    // .with("username", "birthyear")
    // .without("password", "access_token");
    const {error, value} = Joi.validate(req.body.regData, schema, {abortEarly: false})
    console.log(error.details)
};
