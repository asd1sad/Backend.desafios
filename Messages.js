// const { options } = require('./sqlite3/connection');
// const knex = require('knex')(options);
const fs = require('fs');

const messages = JSON.parse(fs.readFileSync('./db/messages.json', 'utf8'));

class Messages {
  // constructor() {
  //   this.knex = knex;
  // }
  //
  // async getMessages() {
  //   const result = await this.knex.select().from('messages');
  //   return result;
  // }
  //
  // async addMessage(message) {
  //   const result = await this.knex('messages').insert(message);
  //   return result;
  // }

  async getMessages() {
    return messages;
  }

  async addMessage(message) {
    messages.push(message);
    fs.writeFileSync('./db/messages.json', JSON.stringify(messages, null, 2));
    return message;
  }
}

module.exports = new Messages();
