import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import DB from "../infrastructure/sequelize";

// authorization > "broadcaster", "modo", "vip", "sub", "viewer";

export class CommandEntity extends Model<
  InferAttributes<CommandEntity>,
  InferCreationAttributes<CommandEntity>
> {
  declare id: CreationOptional<string>;
  declare channel: string;
  declare trigger: string;
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
      unique: "uniqueContraintTriggerChannel",
    },
    trigger: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "uniqueContraintTriggerChannel",
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
