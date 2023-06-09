const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

const { models } = require('./../libs/sequelize');

class CategoryService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => console.log(error));
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products'],
    });
    return category;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
