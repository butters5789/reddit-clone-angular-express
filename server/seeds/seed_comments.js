exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('comments').del(),

        knex('comments').insert({
            posting_id: 3,
            author_id: 1,
            comment: 'Hello World'
        }),
        knex('comments').insert({
            posting_id: 1,
            author_id: 2,
            comment: 'Goodbye World'
        }),
        knex('comments').insert({
            posting_id: 2,
            author_id: 3,
            comment: 'Welcome World'
        })
    );
};
