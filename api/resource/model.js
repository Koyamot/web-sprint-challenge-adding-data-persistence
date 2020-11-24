// build your `Resource` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    addResource

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
        // const resources = await getResources(id)
        return resources;
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

