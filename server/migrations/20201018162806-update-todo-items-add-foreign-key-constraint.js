'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('TodoItems', {
      type: 'foreign key',
      fields: ['todoId'],
      name: 'FK_TodoItems_Todos',
      references: {
        table: 'Todos',
        field: 'id'
      },
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('TodoItems', 'FK_TodoItems_Todos');
  }
};
