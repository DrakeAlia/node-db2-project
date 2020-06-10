
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make', 50).notNullable();
    tbl.string('model', 50).notNullable();
    tbl.string('mileage', 255).notNullable();
    tbl.string('transmission', 25);
    tbl.string('statusOfTitle', 25);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};


