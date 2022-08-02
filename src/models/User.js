import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        usr_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING(20),
          field: "usr_id",
        },

        usr_name: {
          allowNull: false,
          type: Sequelize.STRING(200),
        },

        usr_email: {
          allowNull: false,
          type: Sequelize.STRING(254),
        },

        usr_username: {
          allowNull: false,
          type: Sequelize.STRING(200),
        },

        usr_password: {
          allowNull: false,
          type: Sequelize.STRING(200),
        },

        is_super_admin: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          default: true,
        },

        record_owner: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        created_usr: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        last_modified_usr: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "created_date",
        },

        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "last_modified_date",
        },
      },
      {
        sequelize,
        timestamps: true,
        tableName: "users",
      }
    );

    return this;
  }

  static associate(models) {}
}

export default User;
