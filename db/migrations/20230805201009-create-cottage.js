/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cottages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      sq: {
        type: Sequelize.TEXT,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      sleeper: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.TEXT,
      },
      imgs: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.TEXT,
      },
      checkIn: {
        type: Sequelize.TEXT,
      },
      checkOut: {
        type: Sequelize.TEXT,
      },
      add: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cottages');
  },
};
