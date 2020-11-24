
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'ProjectA', description:'A project by any other name, is just a project.', completed: 0},
        {id: 2, name: 'ProjectB', description:'A project by any other name, is just a project.', completed: 0},
        {id: 3, name: 'ProjectC', description:'A project by any other name, is just a project.', completed: 0}
      ]);
    });
};
