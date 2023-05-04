"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userProfile.init(
    {
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "userProfile",
    }
  );
  return userProfile;
};
