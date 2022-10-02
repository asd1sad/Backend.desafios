// const { options } = require('./mariaDB/connection');
// const knex = require('knex')(options);
const { faker } = require('@faker-js/faker');

class Container {
  // constructor() {
  //   this.knex = knex;
  // }
  // async getProducts() {
  //   const result = await this.knex.select().from('products');
  //   return result;
  // }
  // async getProduct(id) {
  //   const result = await this.knex.select().from('products').where('id', id);
  //   return result;
  // }
  // async addProduct(product) {
  //   const result = await this.knex('products').insert(product);
  //   return result;
  // }
  // async updateProduct(id, product) {
  //   const result = await this.knex('products').where('id', id).update(product);
  //   return result;
  // }
  // async deleteProduct(id) {
  //   const result = await this.knex('products').where('id', id).del();
  //   return result;
  // }
  async getFakeProducts() {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push({
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.imageUrl(),
      });
    }
    return products;
  }
}

module.exports = new Container();
