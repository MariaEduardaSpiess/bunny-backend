
exports.up = function(knex) {
    return knex.schema.createTable('user_task', 
    function (table) {
        table.increments();
        table.text('description');
        table.enu('state', ['TO_DO', 'DONE'], { useNative: true, enumName: 'state' });
        table.integer('user_id').references('id').inTable('user');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_task');
};
