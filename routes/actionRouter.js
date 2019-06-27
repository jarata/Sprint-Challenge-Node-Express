const express = require('express');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await Actions.get();
        res.status(200).json(action)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The actions information could not be retrieved."
        })

    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const action = await Actions.get(id);
    try {
        if (action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({
                error: "The action with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The action information could not be retrieved"
        })
    }
});

router.post('/', async (req, res) => {
    const action = await Actions.insert(req.body);
    try {
        res.status(201).json({
            message: "Action successfully created",
            action
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The action could not be created"
        })
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const actionUpdate = req.body;
    try {
        const action = await Actions.get(id);
        if (action) {
            await Actions.update(id, actionUpdate);
            return res.status(200).json({
                message: "Action successfully updated",
                action
            })
        } else {
            res.status(404).json({
                error: "The action with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The action information could not be modified"
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Actions.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: "Action successfully deleted"
            })
        } else {
            res.status(404).json({
                error: "The action with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The action could not be deleted"
        })
    }
});

module.exports = router;