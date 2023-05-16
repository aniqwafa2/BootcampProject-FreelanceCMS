"use strict";
const { user, userProfile, job } = require("../models");

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
    let portlokal = process.env.PORT || 3000;
    let data = [
      {
        name: "admin",
        email: "admin@mail.com",
        password: "adminpass",
        role: 1,
        address: "Jl. Admin",
      },
      {
        name: "user",
        email: "user@mail.com",
        password: "userpass",
        address: "Jl. User, perempatan belok kiri",
        image:
          "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
        skill: "Software Engineer",
      },
      {
        name: "anotheruser",
        email: "anotheruser@mail.com",
        password: "anotheruserpass",
        address: "Jl. anotheruser, perempatan belok kiri",
        image: `http://localhost:${portlokal}/default/profile_avatar.png`,
        skill: "Software Engineer",
      },
    ];

    for (const item of data) {
      const { name, email, password, role, address, image, skill } = item;
      await user.create(
        {
          name,
          email,
          password,
          role,
          userProfile: {
            address,
            image,
            skill,
          },
        },
        { include: [userProfile] }
      );
    }

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

    await job.bulkCreate(
      [
        {
          name: "translate teks ini",
          price: 100000,
          description: "ini deskripsi panjang",
          categoryId: 2,
          file: `http://localhost:${portlokal}/default/text_file.txt`,
          dueDate: "2023-07-23",
        },
        {
          name: "Web Dev",
          price: 1000000,
          description:
            "kerjakan ini \n 1.blalbalba \n 2.blalbalba \n 3.blalbalba",
          categoryId: 1,
          dueDate: "2023-05-01",
        },
      ],
      { individualHooks: true }
    );

    await queryInterface.bulkInsert("applicants", [
      {
        jobId: 1,
        userId: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jobId: 1,
        userId: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jobId: 1,
        userId: 2,
        status: false,
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
    await queryInterface.bulkDelete("jobs", null, {});
    await queryInterface.bulkDelete("applicants", null, {});
  },
};
