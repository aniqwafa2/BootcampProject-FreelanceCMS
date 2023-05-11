"use strict";
const { user, userProfile } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await user.bulkCreate(
      [
        {
          name: "admin",
          email: "admin@mail.com",
          password: "adminpass",
          role: 1,
        },
        {
          name: "user",
          email: "user@mail.com",
          password: "userpass",
        },
      ],
      { individualHooks: true }
    );

    await userProfile.bulkCreate(
      [
        {
          address: "Jl. Admin",
        },
        {
          address: "Jl. User, perempatan belok kiri",
          image:
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
          skill: "Software Engineer",
        },
      ],
      { individualHooks: true }
    );

    await queryInterface.bulkInsert("categories", [
      {
        name: "Software Dev",
        description: "Any kind of software engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Translator",
        description:
          "Translating one language to one or multiple other languages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("userProfiles", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
