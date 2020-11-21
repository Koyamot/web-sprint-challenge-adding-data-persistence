
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.string('name', 30).notNullable();
        tbl.string('description', 300);
        tbl.boolean('completed').notNullable().defaultTo(0);
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name', 30).notNullable();
        tbl.string('description', 300);
    })
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id').references('id').inTable('project').notNullable().onDelete('cascade');
        tbl.integer('resource_id').references('id').inTable('resource').notNullable().onDelete('cascade');
        // tbl.primary(['resource_id', 'project_id'])
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.string('name', 30).notNullable();
        tbl.string('description', 50).notNullable();
        tbl.string('notes');
        tbl.boolean('completed').notNullable().defaultTo(0);
        tbl.integer('project_id').references('id').inTable('project').notNullable().onDelete('cascade');
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project_resources')
};
