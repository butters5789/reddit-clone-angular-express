exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('users').del(),

        knex('users').insert({
            username: 'user1',
            password_hash: 'password',
            first_name: 'Jared',
            last_name: 'Dunn'
        }),
        knex('users').insert({
            username: 'user2',
            password_hash: 'password',
            first_name: 'Erlich',
            last_name: 'Bachmann'
        }),
        knex('users').insert({
            username: 'user3',
            password_hash: 'password',
            first_name: 'Richard',
            last_name: 'Hendricks'
        })
    );
};
