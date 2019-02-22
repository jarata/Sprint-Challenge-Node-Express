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

//get: function(id) {
//     let query = db('projects as p');
//
//     if (id) {
//       query.where('p.id', id).first();
//
//       const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]
//
//       return Promise.all(promises).then(function(results) {
//         let [project, actions] = results;
//         project.actions = actions;
//
//         return mappers.projectToBody(project);
//       });
//     }
//
//     return query.then(projects => {
//       return projects.map(project => mappers.projectToBody(project));
//     });
//   },

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

//   getProjectActions: function(projectId) {
//     return db('actions')
//       .where('project_id', projectId)
//       .then(actions => actions.map(action => mappers.actionToBody(action)));
//   },

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

//   insert: function(project) {
//     return db('projects')
//       .insert(project)
//       .then(([id]) => this.get(id));
//   },

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

//   update: function(id, changes) {
//     return db('projects')
//       .where('id', id)
//       .update(changes)
//       .then(count => (count > 0 ? this.get(id) : null));
//   },

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

//   remove: function(id) {
//     return db('projects')
//       .where('id', id)
//       .del();
//   },

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