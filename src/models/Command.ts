import {
  Association,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import DB from "../infrastructure/sequelize";

// authorization > "broadcaster", "modo", "vip", "sub", "viewer";

export class CommandEntity extends Model<
  InferAttributes<CommandEntity>,
  InferCreationAttributes<CommandEntity>
> {
  declare id: CreationOptional<string>;
  declare channel: string;
  declare input: string;
  declare output: string;
}

CommandEntity.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    input: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    output: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: DB,
    tableName: "command",
    modelName: "command",
  }
);
