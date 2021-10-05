'use strict'

const Database = use('Database')

class ContactController {
    async contact({ request, response }) {
        await Database.table('contacts').insert({
            name: request.input('name'),
            phone: request.input('phone'),
            message: request.input('message'),
            date: request.input('date'),
            department: request.input('department'),
            email: request.input('email')
        })

        return response.json('successfully added contact');
    }
    async getContact({ request, response }) {
        const contacts = await Database.select('*').from('contacts');

        return response.json({
            contacts: contacts
        })
    }
}

module.exports = ContactController
