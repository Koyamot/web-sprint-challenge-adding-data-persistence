// build your `Task` model here
// build your `Task` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    addTask

}

async function getProjects(id) {
    try {
        return await db('task')
            .join('project', 'task.project_id', 'project.id')
            .where('task.id', id)
            .select('project.name', 'project.description')
    } catch (err) {
        
    }
}

async function find() {
    try {
        return await db('task')
    } catch (err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const [task] = await db('task').where('task.id', id).select('name', 'description', 'notes', 'completed')
        const proj = await getProjects(id)
        return {...task, proj}
    } catch (err) {
        throw err
    }
}

async function addTask(task) {
    try {
        const newTask = await db('task').insert(task)
        return newTask;
    } catch (err) {
        throw err;
    }
}