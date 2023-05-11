"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      job.belongsTo(models.category);
      job.belongsToMany(models.user, { through: models.applicant });
    }
  }
  job.init(
    {
      name: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER, validate: { isInt: true } },
      description: { type: DataTypes.STRING },
      categoryId: { type: DataTypes.INTEGER, validate: { isInt: true } },
      status: { type: DataTypes.BOOLEAN },
      file: { type: DataTypes.STRING },
      dueDate: { type: DataTypes.DATE, validate: { isDate: true } },
    },
    {
      sequelize,
      modelName: "job",
      hooks: {
        beforeCreate: (job, options) => {
          job.status = false;
        },
      },
    }
  );
  return job;
};
