const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1;')
    .then(() => {
      let users = [
        {
          email: 'somedude@email.com',
          password: hash
        },
        {
          email: 'anotherdude@email.com',
          password: hash
        }
      ];
      return knex('user').insert(users);
    });
};
