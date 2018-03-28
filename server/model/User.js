const S = require("sequelize");
const sequelize = require("../sql")("test_account"); // import database connection config

const User = sequelize.define("account", {
  FLD_ID: {
    type: S.STRING,
    primaryKey: true,
    allowNull: false,
  },
  FLD_PASSWORD: {
    type: S.STRING,
    allowNull: false
  },
  FLD_Mail: { type: S.STRING, allowNull: true },
  FLD_CARD: { type: S.STRING, allowNull: true },
  FLD_SEX: { type: S.INTEGER, allowNull: true },
  FLD_QU: { type: S.TEXT, allowNull: true },
  FLD_ANSWER: { type: S.TEXT, allowNull: true },
  FLD_NAME: { type: S.TEXT, allowNull: true },
  FLD_REGIP: { type: S.STRING, allowNull: true },
  FLD_REGTIME: { type: S.DATE, allowNull: true },
  FLD_LASTLOGINTIME: { type: S.DATE, allowNull: true },
  FLD_LASTLOGINIP: { type: S.STRING, allowNull: true },
  FLD_VIP: { type: S.BOOLEAN, allowNull: true },
  FLD_ZT: { type: S.INTEGER, allowNull: true },
  FLD_ONLINE: { type: S.INTEGER, allowNull: true },
  FLD_RXPIONT: { type: S.INTEGER, allowNull: true },
  FLD_RXPIONTX: { type: S.INTEGER, allowNull: true },
  FLD_VIPTIM: { type: S.DATE, allowNull: true },
  total_point: { type: S.INTEGER, allowNull: true },
  vpoint_log: { type: S.INTEGER, allowNull: true },
  vnumber_log: { type: S.INTEGER, allowNull: true }
}, {
  timestamps: false,
  tableName: 'TBL_ACCOUNT',
});

module.exports = User;
