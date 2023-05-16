"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class messageRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      messageRecord.belongsTo(models.messageContact);
      messageRecord.belongsTo(models.user);
    }
  }
  messageRecord.init(
    {
      messageContactId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      userId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      messageContent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "messageRecord",
    }
  );
  return messageRecord;
};
