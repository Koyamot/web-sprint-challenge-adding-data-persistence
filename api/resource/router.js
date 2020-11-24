// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resource.find()
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed!'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resource.findById(id)
        .then(resource => {
            if (resource){
            res.json(resource);
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resource.addResource(resourceData)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
  });

module.exports = router;