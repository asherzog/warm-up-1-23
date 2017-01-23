
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "cheese"; ALTER SEQUENCE cheese_id_seq RESTART WITH 1;')
    .then(() => {
      let cheeses = [
        {
          name: 'Brie',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/220px-Brie_01.jpg',
          rating: 4,
          user_id: 1
        },
        {
          name: 'Cheddar',
          image_url: 'https://www.splendidtable.org/sites/default/files/styles/lede_image/public/470340853.jpg?itok=7acsHkTk',
          rating: 5,
          user_id: 1
        },
        {
          name: 'Gruyere',
          image_url: 'http://www.cheesesfromswitzerland.com/fileadmin/_processed_/csm_content_gruyere_70deb08889.jpg',
          rating: 4,
          user_id: 2
        },
        {
          name: 'Swiss',
          image_url: 'http://ichef-1.bbci.co.uk/news/660/media/images/83284000/jpg/_83284146_83284145.jpg',
          rating: 1,
          user_id: 2
        },
        {
          name: 'Provolone',
          image_url: 'http://goldenagecheese.com/wp-content/uploads/2014/03/prov.jpg',
          rating: 2,
          user_id: 2
        },
        {
          name: 'Stinky',
          image_url: 'http://i0.wp.com/www.kickassfacts.com/wp-content/uploads/2014/09/Stinky-Cheese.jpg?fit=620%2C330',
          rating: 1,
          user_id: 1
        }
      ];
      return knex('cheese').insert(cheeses);
    });
};
