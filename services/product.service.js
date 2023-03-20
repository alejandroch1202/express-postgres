const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll({ include: ['category'] });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    let product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    changes = { ...changes, id: id };
    const response = await models.Product.update(changes);
    return response;
  }

  async delete(id) {
    await models.Product.destroy(id);
    return { id };
  }
}

module.exports = ProductsService;
