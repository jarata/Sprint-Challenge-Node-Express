const express = require('express');
const Projects = require('../data/helpers/projectModel');

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

// router.get('/:id', async (req, res) => {
//
// });

//   getProjectActions: function(projectId) {
//     return db('actions')
//       .where('project_id', projectId)
//       .then(actions => actions.map(action => mappers.actionToBody(action)));
//   },

// router.get('/:id', async (req, res) => {
//
// });

//   insert: function(project) {
//     return db('projects')
//       .insert(project)
//       .then(([id]) => this.get(id));
//   },

// router.post('/', async (req, res) => {
//
// });

//   update: function(id, changes) {
//     return db('projects')
//       .where('id', id)
//       .update(changes)
//       .then(count => (count > 0 ? this.get(id) : null));
//   },

// router.put('/:id', async (req, res) => {
//
// });

//   remove: function(id) {
//     return db('projects')
//       .where('id', id)
//       .del();
//   },

// router.remove('/:id', async (req, res) => {
//
// });

module.exports = router;