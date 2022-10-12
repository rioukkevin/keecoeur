import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Optional,
} from "sequelize";
import DB from "../infrastructure/sequelize";

export class RoleEntity extends Model<
  InferAttributes<RoleEntity>,
  InferCreationAttributes<RoleEntity>
> {
  declare id: CreationOptional<string>;
  declare slug: string;
  declare parent: string;
}

RoleEntity.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    sequelize: DB,
    tableName: "role",
    modelName: "Role",
  }
);

// RoleEntity.belongsTo(CommandEntity);
