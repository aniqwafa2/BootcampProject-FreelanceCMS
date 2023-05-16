"use strict";
const { Model } = require("sequelize");
const { encryptPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.userProfile, { foreignKey: "id" });
      user.belongsToMany(models.job, { through: models.applicant });
      user.hasMany(models.messageRecord);
      user.hasMany(models.messageContact, { foreignKey: "senderId" });
      user.hasMany(models.messageContact, { foreignKey: "recipientId" });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      balance: {
        type: DataTypes.INTEGER,
        validate: { isNumeric: true },
      },
      role: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        validate: { notEmpty: true, isNumeric: true },
      },
    },
    {
      sequelize,
      modelName: "user",
      hooks: {
        beforeCreate: async (user, options) => {
          try {
            user.password = await encryptPass(user.password);
            user.balance = user.balance || 0;
            user.role = user.role || 2;
          } catch (error) {
            throw error;
          }
        },
        beforeUpdate: async (user, options) => {
          try {
            user.password = await encryptPass(user.password);
          } catch (error) {
            throw error;
          }
        },
      },
      // NOTE: buat exclude password saat getData
      defaultScope: { attributes: { exclude: "password" } },
      // scopes: {
      //   withpwd: {
      //     attributes: { include: "password" },
      //   },
      // },
    }
  );
  return user;
};
