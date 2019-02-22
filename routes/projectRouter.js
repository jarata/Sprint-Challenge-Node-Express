const express = require('express');
const Projects = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const project = await Projects.get();
        res.status(200).json(project)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The projects information could not be retrieved."
        })

    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const project = await Projects.get(id);
    try {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({
                error: "The project with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project information could not be retrieved"
        })
    }
});

router.get('/:id/actions', async (req, res) => {
    const {id} = req.params;
    const projectAction = await Projects.getProjectActions(id);
    try {
        if (projectAction) {
            res.status(200).json(projectAction);
        } else {
            res.status(404).json({
                error: "The project's actions with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project's actions information could not be retrieved"
        })
    }
});

router.post('/', async (req, res) => {
    const project = await Projects.insert(req.body);
    try {
        res.status(201).json({
            message: "Project successfully created",
            project
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project could not be created"
        })
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const projectUpdate = req.body;
    try {
        const project = await Projects.get(id);
        if (project) {
            await Projects.update(id, projectUpdate);
            return res.status(200).json({
                message: "Project successfully updated",
                project
            })
        } else {
            res.status(404).json({
                error: "The project with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project information could not be modified"
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: "Project successfully deleted"
            })
        } else {
            res.status(404).json({
                error: "The project with the specified ID does not exist"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project could not be deleted"
        })
    }
});

module.exports = router;