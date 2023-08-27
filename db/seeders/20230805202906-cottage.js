/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cottages = [
      {
        id: 1,
        name: 'Светлый',
        sq: '280 м²',
        count: 30,
        sleeper: 22,
        address: 'Тюмень, улица Николая Егорова 5А',
        imgs: './pictures/light/1.jpeg\n ./pictures/light/2.jpeg\n ./pictures/light/3.jpeg\n./pictures/light/4.jpeg\n ./pictures/light/5.jpeg\n ./pictures/light/6.jpeg\n ./pictures/light/7.jpeg\n ./pictures/light/8.jpeg\n ./pictures/light/9.jpeg\n ./pictures/light/10.jpeg\n ./pictures/light/11.jpeg\n ./pictures/light/12.jpeg',
        description: 'Спальных мест 22 (4 отдельных спальни с двумя двуспальными кроватями в каждой и диваны по дому, а также имеется тайная комната Гарри Потера)\n Большая вместимость и много уютных спальных мест\n Кухня оборудована современной техникой и красивой посудой\n Необходимые мелочи есть: шампура, решётки на мангал, туалетная бумага, губки, средство для посуды, мыло, полотенца и др.',
        price: '15000₽\n Обеспечительный залог -3000₽\n Понедельник-четверг - 15000\n Пятница и предпраздничные дни - 20000₽\n Воскресенье - 17000₽\n Суббота и праздники - 25000₽',
        checkIn: '15:00',
        checkOut: '13:00',
        add: 'Раннее заселение или поздний выезд оплачивается отдельно-700₽ час, при согласовании на кануне\n Баня оплачивается отдельно, за пять часов - 2000₽\n Постельное белье за отдельную плату 100 за один комплект на 1 человека, оно находится в доме и берёте сколько надо, на следующий день по факту расплачиваетесь\n Кухня полностью оборудована: посудомоечная машина, холодильник, плита, духовка, микроволновая печь, тостер и чайник. Посуда есть до 30 человек.',
      },
      {
        id: 2,
        name: 'Темный',
        sq: '250 м²',
        count: 25,
        sleeper: 19,
        address: 'Тюмень, улица Николая Егорова 5',
        imgs: './pictures/dark/1.jpeg\n ./pictures/dark/2.jpeg\n ./pictures/dark/3.jpeg\n ./pictures/dark/4.jpeg\n ./pictures/dark/5.jpeg\n ./pictures/dark/6.jpeg\n ./pictures/dark/7.jpg\n ./pictures/dark/8.jpeg\n ./pictures/dark/9.jpeg\n ./pictures/dark/10.jpeg\n ./pictures/dark/11.jpeg\n ./pictures/dark/12.jpeg\n ./pictures/dark/13.jpeg\n ./pictures/dark/14.jpeg\n ./pictures/dark/15.jpeg\n ./pictures/dark/16.jpeg\n ./pictures/dark/17.jpeg\n ./pictures/dark/18.jpeg\n ./pictures/dark/19.jpeg\n ./pictures/dark/20.jpeg\n ./pictures/dark/21.jpeg\n ./pictures/dark/22.jpeg',
        description: 'Бильярдный зал, четыре отдельных спальни и санузел на втором этаже\n Современная кухня с банкетным залом и потолками высотой в 6 метров на первом этаже\n Зона СПА (баня с душевой и комнатой отдыха) и сан узлом на первом этаже также в доме\n На стенах авторская роспись и картины художников Тюмени!',
        price: '12000₽\n Обеспечительный депозит: 3 000 руб.\n Понедельник-четверг - 12000\n Пятница, воскресенье и предпраздничные дни - 15000₽\n Суббота и праздники - 25000₽',
        checkIn: '15:00',
        checkOut: '13:00',
        add: 'Раннее заселение или поздний выезд оплачивается отдельно-700₽ час, при согласовании на кануне\n Баня оплачивается отдельно, за пять часов - 2000₽\n Постельное белье за отдельную плату 100 за один комплект на 1 человека, оно находится в доме и берёте сколько надо, на следующий день по факту расплачиваетесь\n Кухня полностью оборудована: посудомоечная машина, холодильник, плита, духовка, микроволновая печь, тостер и чайник. Посуда есть до 25 человек.',
      },
      {
        id: 3,
        name: 'Малый',
        sq: '105 м²',
        count: 10,
        sleeper: 10,
        address: 'Тюмень, улица Николая Егорова 19',
        imgs: './pictures/small/1.jpeg\n ./pictures/small/2.jpeg\n ./pictures/small/3.jpeg\n ./pictures/small/4.jpeg\n ./pictures/small/5.jpeg\n ./pictures/small/6.jpeg\n ./pictures/small/7.jpeg\n ./pictures/small/8.jpeg\n ./pictures/small/9.jpeg\n ./pictures/small/10.jpeg\n ./pictures/small/11.jpeg\n ./pictures/small/12.jpeg\n ./pictures/small/13.jpeg\n ./pictures/small/14.jpeg\n ./pictures/small/15.jpeg\n ./pictures/small/16.jpeg',
        description: 'На кухне варочная панель и духовка, стиральная машина, холодильник, микроволновая печь, тостер, чайник, имеется посуда.\n Баня, сан. узел, душевая кабина.\n На 2-м этаже комфортабельные две отдельные спальни (общее количество спальных мест в доме рассчитано на 10 взрослых человек), два телевизора, cпутниковое цифровое телевидение.\n Акустическая система (подключается через аукс, блютуз, флешку)\n Необходимые мелочи есть: туалетная бумага, губки, средство для мытья посуды,мыло, полотенца и др.',
        price: '6000₽\n Обеспечительный депозит: 3 000 руб.\n Понедельник-четверг - 6000\n Пятница, воскресенье и предпраздничные дни - 8000₽\n Суббота и праздники - 10000',
        checkIn: '14:00',
        checkOut: '12:00',
        add: 'Раннее заселение или поздний выезд оплачивается отдельно-500₽ час, при согласовании на кануне.\n Баня в доме и оплачивается отдельно - 1000 руб.\n Бронируя наш дом Вы автоматически даёте своё Согласие на соблюдение закона о тишине в Тюменской области\n Салюты запрещены\n С животными в дом заезжать запрещено',
      },
      {
        id: 4,
        name: 'Прованс',
        sq: '130 м²',
        count: 18,
        sleeper: 18,
        address: 'Тюмень, улица Николая Егорова 17',
        imgs: './pictures/violet/1.jpeg\n ./pictures/violet/2.jpeg\n ./pictures/violet/3.jpeg\n ./pictures/violet/4.jpeg\n ./pictures/violet/5.jpeg\n ./pictures/violet/6.jpeg\n ./pictures/violet/7.jpeg\n ./pictures/violet/8.jpeg\n ./pictures/violet/9.jpeg\n ./pictures/violet/10.jpeg\n ./pictures/violet/11.jpeg\n ./pictures/violet/12.jpeg\n ./pictures/violet/13.jpeg\n ./pictures/violet/14.jpeg\n ./pictures/violet/15.jpeg\n ./pictures/violet/16.jpeg',
        description: '',
        price: '7000₽\n Обеспечительный депозит: 3 000 руб.\n Понедельник-четверг - 7000\n Пятница, воскресенье и предпраздничные дни - 10000₽\n Суббота и праздники - 12000',
        checkIn: '14:00',
        checkOut: '12:00',
        add: 'Баня и постельное бельё оплачивается отдельно\n Баня - 1000 рублей за три часа, бельё - 100 рублей за комплект на 1 человека.',
      },
    ];

    const data = cottages.map((cottage) => ({
      ...cottage,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Cottages', data);
  },
};
