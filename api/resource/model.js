// build your `Resource` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    addResource

}

async function getProjects(id) {
    try {
        return await db('resource')
            .join('project_resources', 'project_resources.resource_id', 'resource.id')
            .join('project', 'project_resources.project_id', 'project.id')
            .where('resource.id', id)
            .select('project.name', 'project.description')
    } catch (err) {
        throw err;
    }
}


async function find() {
    try {
       return await db('resource') 
    } catch (error) {
        throw error;
    }
}

async function findById(id) {
    try {
        const [resources] = await db('resource').where({ id }).select('name', 'description')
        const proj = await getProjects(id)
        return {...resources, proj}
    } catch (err) {
        throw err
    }
}

async function addResource(resource) {
    try {
        const newResource = await db('resource').insert(resource)
        return newResource;
    } catch (err) {
        throw err;
    }
}

