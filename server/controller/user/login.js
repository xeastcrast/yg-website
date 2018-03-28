const Joi = require("joi");
const User = require("../../model/User");
const validate = require("../../libs/validation");

module.exports = (req, res) => {
  const datas = req.body;

  const rules = {
    id: Joi.string()
      .alphanum()
      .min(4)
      .max(12)
      .required(),
    pass: Joi.string()
      .alphanum()
      .min(4)
      .max(20)
      .required()
  };

  let validation = validate(datas, rules, req, res);
  console.log(validation);
  console.log("Login");
  console.log("ID: " + datas.id);
  console.log("Password: " + datas.pass);
  if (Object.keys(validation).length < 1) {
    User.findOne({
      where: {
        FLD_ID: datas.id,
        FLD_PASSWORD: datas.pass
      },
      attributes: ["FLD_ID", "FLD_PASSWORD"]
    }).then(result => {
      if (result !== null) {
        console.log(result);
        return res.sendStatus(200);
      }

      // หาก ไม่มี idและ pass ที่ตรงกันเลย
      return res.sendStatus(300);
    });
  }else {
    return res.sendStatus(300);
  }
};
