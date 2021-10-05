'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('phone', 12).notNullable().unique();
      table.string('name', 50).notNullable().unique();
      table.string('department', 30).notNullable().unique();
      table.string('email', 30).notNullable().unique();
      table.string('date', 20).notNullable().unique();
      table.text('message');
      table.timestamps()
    })
  }

  down() {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
