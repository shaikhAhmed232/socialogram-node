'use strict';

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from 'sequelize';

import {Post} from './post';




export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id:CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare mobileNo: string;
  declare profilePic: string | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date | null>;

  declare posts: NonAttribute<Post[]>;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models:any) {
    // define association here
    User.hasMany(models.Post, {foreignKey: "user_id"})
  }
};


export const model = (sequelize:any, DataTypes:any) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'mobile'
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'profile_pic'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    freezeTableName: true,
    tableName: 'users',
  });
  return User;
};
