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
      "Todos",
      [
        { title: "Thailand", createdAt: new Date(), updatedAt: new Date() },
        { title: "Peru", createdAt: new Date(), updatedAt: new Date() },
        { title: "Sweden", createdAt: new Date(), updatedAt: new Date() },
        { title: "Kenya", createdAt: new Date(), updatedAt: new Date() },
        { title: "China", createdAt: new Date(), updatedAt: new Date() },
        { title: "Chad", createdAt: new Date(), updatedAt: new Date() },
        { title: "Russia", createdAt: new Date(), updatedAt: new Date() },
        { title: "Mauritius", createdAt: new Date(), updatedAt: new Date() },
        { title: "Brazil", createdAt: new Date(), updatedAt: new Date() },
        { title: "Guatemala", createdAt: new Date(), updatedAt: new Date() },
        { title: "Peru", createdAt: new Date(), updatedAt: new Date() },
        { title: "China", createdAt: new Date(), updatedAt: new Date() },
        { title: "Thailand", createdAt: new Date(), updatedAt: new Date() },
        { title: "Philippines", createdAt: new Date(), updatedAt: new Date() },
        { title: "Indonesia", createdAt: new Date(), updatedAt: new Date() },
        { title: "Ukraine", createdAt: new Date(), updatedAt: new Date() },
        { title: "Scotland", createdAt: new Date(), updatedAt: new Date() },
        { title: "Russia", createdAt: new Date(), updatedAt: new Date() },
        { title: "Indonesia", createdAt: new Date(), updatedAt: new Date() },
        { title: "Georgia", createdAt: new Date(), updatedAt: new Date() },
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
      'Todos',
      null,
      {
        truncate: true,
        cascade: true,
        restartIdentity: true,
      }
    );
  },
};
