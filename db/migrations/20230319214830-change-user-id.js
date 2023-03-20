'use strict';

const { DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      field: 'user_id',
      unique: true,
      type: DataTypes.INTEGER,
    });
  },

  async down() {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
