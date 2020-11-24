// build your `Project` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    addProject

}

async function getResources(id) {
    try {
        return await db('project')
            .join('project_resources', 'project_resources.project_id', 'project.id')
            .join('resource', 'project_resources.resource_id', 'resource.id')
            .where('project_id', id)
            .select('resource.name', 'resource.description')
    } catch (err) {
        throw err;
    }
}

async function getTasks(id) {
    try {
        return await db('project')
            .join('task', 'task.project_id', 'project.id')
            .where('task.project_id', id)
            .select('task.name', 'task.description', 'task.completed')
    } catch (err) {
        
    }
}

async function find() {
    try {
        return await db('project')
    } catch (err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const [projects] = await db('project').where({ id }).select('name', 'description', 'completed')
        const resources = await getResources(id)
        const tasks = await getTasks(id)
        return {...projects, resources, tasks}
    } catch (err) {
        throw err
    }
}

async function addProject(project) {
    try {
        const newProject = await db('project').insert(project)
        return newProject;
    } catch (err) {
        throw err;
    }
}