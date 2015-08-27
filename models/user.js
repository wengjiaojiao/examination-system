module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userRole: DataTypes.STRING,
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userNumber: DataTypes.STRING
  });
  return User;
};
