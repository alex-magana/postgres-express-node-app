"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "TodoItems",
      [
        {
          todoId: 20,
          content: "Krajan",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 14,
          content: "Ulety",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 4,
          content: "Calabugao",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 19,
          content: "Aniva",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 4,
          content: "Karolino-Buhaz",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 3,
          content: "Donnybrook",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 20,
          content: "Passos",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 6,
          content: "Leramatang",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 5,
          content: "Gexi",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 8,
          content: "Yelets",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 20,
          content: "Kafr Qūd",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 17,
          content: "Bedayu",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 14,
          content: "Delta del Tigre",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 12,
          content: "Antipino",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 13,
          content: "Cotabambas",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 1,
          content: "Los Algarrobos",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 8,
          content: "Fukuoka-shi",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 1,
          content: "Comendador",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 16,
          content: "Martaban",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoId: 13,
          content: "Emiliano Zapata",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete(
      "TodoItems",
      null,
      {
        truncate: true,
        cascade: true,
        restartIdentity: true,
      }
    );
  },
};
