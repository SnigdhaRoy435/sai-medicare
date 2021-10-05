'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run() {
    const password = await Hash.make('iamadmin')

    await Database.table('users').insert({
      username: 'Admin',
      email: 'saimedicareAdmin@gmail.com',
      password: password,
      role: 1
    })
  }
}

module.exports = UserSeeder
