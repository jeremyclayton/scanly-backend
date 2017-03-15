
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "review"; ALTER SEQUENCE review_id_seq RESTART WITH 2;')
    .then(function () {
      var reviews = [{
        id: 1,
        review: 'This is such a great board! It is stiff aggressive all mountain freestyle snowboard for people who like to go big in the jump park and the back country. This is an aggressive, poppy camber all mountain freestyle board that is especially great when it comes to jumps of all sizes.',
        memberName: 'Jeremy Clayton',
        rating: 5,
        productId: 1
      }];
      return knex('review').insert(reviews);
    });
};
