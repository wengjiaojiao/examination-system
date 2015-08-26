module.exports = function(sequelize, DataTypes) {
  var Exam = sequelize.define('Exam', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    examName: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(model) {
        Exam.hasOne(model.User, {
          foreignKey: {
            name: 'id'
          }
        });
      }
    }
  });
  return Exam;
};
