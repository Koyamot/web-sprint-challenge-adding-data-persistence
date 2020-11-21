
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'ResourceA', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 1},
        {id: 2, name: 'ResourceB', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 1},
        {id: 3, name: 'ResourceC', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 1},
        {id: 4, name: 'ResourceA', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 2},
        {id: 5, name: 'ResourceB', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 2},
        {id: 6, name: 'ResourceC', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 2},
        {id: 7, name: 'ResourceA', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 3},
        {id: 8, name: 'ResourceB', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 3},
        {id: 9, name: 'ResourceC', description:'This is a resource, I use it for a resource, because I need a recourse..', project_id: 3}
      ]);
    });
};