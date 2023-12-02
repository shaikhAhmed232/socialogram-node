'use strict'

import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey,
    Association,
    NonAttribute
} from "sequelize";
import {User} from "./user";


export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare body: string | null;
    declare postImg: string | null;
    declare userId: ForeignKey<User['id']>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;

    declare user: NonAttribute<User>;

    static associate(models:any) {
        // define association here
        Post.belongsTo(models.User)    
    }
}

export const model = (sequelize: any, DataTypes: any) => {
    Post.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        postImg: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'post_img',
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Post',
        freezeTableName: true,
        tableName: 'posts',
    });

    return Post;
}