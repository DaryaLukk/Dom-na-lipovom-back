const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cottage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cottage.init({
    name: DataTypes.TEXT,
    sq: DataTypes.TEXT,
    count: DataTypes.INTEGER,
    sleeper: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    imgs: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.TEXT,
    checkIn: DataTypes.TEXT,
    checkOut: DataTypes.TEXT,
    add: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Cottage',
  });
  return Cottage;
};
