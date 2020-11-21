// build your `Project` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById

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
        return {...projects}
    } catch (err) {
        throw err
    }
}