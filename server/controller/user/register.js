const Joi = require("joi");
const User = require("../../model/User");
const validate = require('../../libs/validation')

module.exports = (req, res) => {
  let datas = req.body;
  const ipPattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

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
      .required(),
    confirmPass: Joi.string()
      .required()
      .valid(Joi.ref("pass"))
      .options({
        language: {
          any: {
            allowOnly: "รหัสผ่านไม่ตรงกัน"
          }
        }
      }),
    email: Joi.string()
      .email()
      .required(),
    phone: Joi.string()
      .regex(/^(09|08|06)\d{8}$/, "Phone")
      .required()
      .options({
        language: {
          string: {
            regex: {
              name: "เบอร์โทรศัพท์ไม่ถูกต้อง ต้องขึ้นต้นด้วย 08, 06 หรือ 09"
            }
          }
        }
      }),
    fname: Joi.string(),
    lname: Joi.string(),
    gender: Joi.number(),
    question: Joi.string().required(),
    answer: Joi.string().required(),
    ip: Joi.string()
      .regex(ipPattern)
      .required()
  }

  let validationError = validate(datas, rules, res, req);
  User.findOne({
    where: {
      FLD_ID: datas.id
    },
    attributes: ["FLD_ID"]
  })
    .then(result => {
      if (result !== null) {
        console.log("Found same Id");
        validationError["id"] = "มีไอดีนี้อยู่แล้ว!!";
      }
      // console.log(validationError);
    })
    .then(() => {
      if (Object.keys(validationError).length < 1) {
        User.create({
          FLD_ID: datas.id,
          FLD_PASSWORD: datas.pass,
          FLD_Mail: datas.email,
          FLD_CARD: datas.phone,
          FLD_SEX: datas.gender,
          FLD_QU: datas.question,
          FLD_ANSWER: datas.answer,
          FLD_NAME: `${datas.fname} ${datas.lname}`,
          FLD_REGIP: datas.ip
        }).then(() => {
          console.log("Data has Inserted");
        });
        return res.sendStatus(200);
      }

      return res.status(400).json(validationError);
    });
};
