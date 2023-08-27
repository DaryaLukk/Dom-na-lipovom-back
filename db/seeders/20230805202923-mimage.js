/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const images = [
      { id: 1, img: './pictures/carousel2.jpeg', desc: 'smth text' },
      { id: 2, img: './pictures/carousel3.jpeg', desc: 'smth text' },
      { id: 3, img: './pictures/carousel4.jpeg', desc: 'smth text' },
    ];

    const data = images.map((image) => ({
      ...image,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('MImages', data);
  },
};
