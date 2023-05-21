"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class messageContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      messageContact.belongsTo(models.user, { foreignKey: "senderId", as: "sender" });
      messageContact.belongsTo(models.user, { foreignKey: "recipientId", as: "recipient" });
      messageContact.hasMany(models.messageRecord);
    }
  }
  messageContact.init(
    {
      senderId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      recipientId: { type: DataTypes.INTEGER, validate: { isInt: true } },
    },
    {
      sequelize,
      modelName: "messageContact",
    }
  );
  return messageContact;
};
