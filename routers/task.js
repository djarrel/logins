const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async(req, res) => {
    const task = new Task(req.body);
    
    try{
    await task.save();
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
});

router.get('/tasks', async(req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send(e);
    })
});

router.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    Task.findById(_id).then((task) => {
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isVAlidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isVAlidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    };

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }catch(e) {
        res.status(400).send(e);
    }
})

module.exports = router;
