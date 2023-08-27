const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MDescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MDescription.init({
    img: DataTypes.TEXT,
    desc: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'MDescription',
  });
  return MDescription;
};
