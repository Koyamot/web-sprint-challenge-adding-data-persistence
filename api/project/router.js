// build your `/api/projects` router here
const express = require('express');

const Project = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Project.find()
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed!'})
        })
})

module.exports = router;