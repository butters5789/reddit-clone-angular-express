module.exports = {

    development: {
        client: 'postgres',
        connection: 'postgres://localhost/reddit-clone-users'
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    }

};
