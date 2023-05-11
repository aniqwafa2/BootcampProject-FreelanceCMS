"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      applicant.belongsTo(models.job);
      applicant.belongsTo(models.user);
    }
  }
  applicant.init(
    {
      jobId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      userId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      status: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "applicant",
      hooks: {
        beforeCreate: (applicant, options) => {
          applicant.status = false;
        },
      },
    }
  );
  return applicant;
};
