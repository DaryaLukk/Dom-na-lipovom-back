/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const descs = [
      { id: 1, desc: 'панорамные окна', img: './pictures/odds/window.png' },
      { id: 2, desc: 'зона спа', img: './pictures/odds/sauna.png' },
      { id: 3, desc: 'кухня с современной техникой', img: './pictures/odds/kitchen.png' },
      { id: 4, desc: 'терраса', img: './pictures/odds/terrace.png' },
      { id: 5, desc: 'мангальная зона', img: './pictures/odds/brazier.png' },
      { id: 6, desc: 'близость к аквапарку и горячим источникам', img: './pictures/odds/thermae.png' },
    ];

    const data = descs.map((desc) => ({
      ...desc,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('MDescriptions', data);
  },
};
