// build your `/api/tasks` router here
// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Task.find()
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed!'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Task.findById(id)
        .then(task => {
            if (task){
            res.json(task);
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})

router.post('/', (req, res) => {
    const taskData = req.body;

    Task.addTask(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
  });

module.exports = router;