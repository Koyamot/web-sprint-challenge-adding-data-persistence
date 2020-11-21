// build your `Project` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById

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

async function find() {
    try {
        return await db('project')
    } catch (err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const [projects] = await db('project').where({ id }).select('name', 'description')
        const resources = await getResources(id)
        return {...projects, resources}
    } catch (err) {
        throw err
    }
}