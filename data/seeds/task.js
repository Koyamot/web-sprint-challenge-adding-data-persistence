
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, name: 'TaskA', description: 'This is a super cool description1', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 1},
        {id: 2, name: 'TaskB', description: 'This is a super cool description2', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 1},
        {id: 3, name: 'TaskC', description: 'This is a super cool description3', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 1},
        {id: 4, name: 'TaskA', description: 'This is a super cool description1', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 2},
        {id: 5, name: 'TaskB', description: 'This is a super cool description2', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 2},
        {id: 6, name: 'TaskC', description: 'This is a super cool description3', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 2},
        {id: 7, name: 'TaskA', description: 'This is a super cool description1', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 3},
        {id: 8, name: 'TaskB', description: 'This is a super cool description2', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 3},
        {id: 9, name: 'TaskC', description: 'This is a super cool description3', notes: 'These are some notes about the task that needs to be completed.', Completed: 0, project_id: 3}
      ])
    });
};
