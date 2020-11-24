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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Project.findById(id)
        .then(project => {
            if (project){
            res.json(project);
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Project.addProject(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });

module.exports = router;