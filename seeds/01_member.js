var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 3;')
    .then(function () {
      var members = [{
        id: 1,
        firstName: 'Jeremy',
        lastName: 'Clayton',
        email: 'jeremy.clayton.91@gmail.com',
        password: bcrypt.hashSync('volcom', 10)
      }, {
          id: 2,
          firstName: 'Maddie',
          lastName: 'Davis',
          email: 'maddie.davis@gmail.com',
          password: bcrypt.hashSync('flowers', 10)
      }];
      return knex('member').insert(members);
    });
};
