'use strict';
const Database = use('Database');
const Hash = use('Hash');

class AuthController {
    // register code

    async store({ request, response }) {
        const password = await Hash.make(request.input('password'));
        await Database.table('users').insert({
            username: request.input('username'),
            email: request.input('email'),
            password: password
        })
        return response.redirect('/login')
    }

    //view of the user

    async view_users({ request, response }) {
        const users = await Database.select('*').from('users');
        return response.json({
            users: users
        })
    }

    // login code

    async login({ response, request, auth, session }) {
        const { email, password } = request.all();

        const token = await auth.attempt(email, password);
        //const user = await auth.getUser();

        return response.json(token)
        //return response.redirect('/admin/' + user.id);
    }

    async single_user({ response, request, params }) {
        const user = await Database.select('*').from('users').where('id', params.id);

        return response.json({
            user: user
        })
    }

}

module.exports = AuthController;