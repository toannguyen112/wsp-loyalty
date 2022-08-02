"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("products", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING(200),
        field: "t_prod_id",
      },

      t_prod_prodCate_id: {
        allowNull: true,
        type: Sequelize.STRING(200),
        references: {
          model: "product_categories",
          key: "t_prodCate_id",
        },
      },

      t_loyalProg_id: {
        allowNull: true,
        type: Sequelize.STRING(200),
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_schema_id: {
        allowNull: true,
        type: Sequelize.STRING(200),
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_prod_name: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_prod_size: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_prod_code: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_prod_sku: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_prod_gender: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_prod_color: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      t_prod_ageFrom: {
        allowNull: true,
        type: Sequelize.DECIMAL(18, 0),
      },

      t_prod_ageTo: {
        allowNull: true,
        type: Sequelize.DECIMAL(18, 0),
      },

      t_prod_startDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_prod_endDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_prod_desc: {
        allowNull: true,
        type: Sequelize.STRING(4000),
      },

      t_prod_specs: {
        allowNull: true,
        type: Sequelize.STRING(1000),
      },

      t_prod_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_prod_price: {
        allowNull: true,
        type: Sequelize.DECIMAL(18, 2),
      },

      t_prod_imgURL: {
        allowNull: true,
        type: Sequelize.STRING(1000),
      },

      t_prod_created_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_prod_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prod_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prod_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("products"),
};
