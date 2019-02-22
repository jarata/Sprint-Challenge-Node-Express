const express = require('express');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

//get: function(id) {
//   let query = db('actions');
//
//   if (id) {
//     return query
//         .where('id', id)
//         .first()
//         .then(action => mappers.actionToBody(action));
//   }
//
//   return query.then(actions => {
//     return actions.map(action => mappers.actionToBody(action));
//   });
// },

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

// insert: function(action) {
//   return db('actions')
//       .insert(action)
//       .then(([id]) => this.get(id));
// },

// router.post('/', async (req, res) => {
//
// });

// update: function(id, changes) {
//   return db('actions')
//       .where('id', id)
//       .update(changes)
//       .then(count => (count > 0 ? this.get(id) : null));
// },

// router.put('/:id', async (req, res) => {
//
// });

// remove: function(id) {
//   return db('actions')
//       .where('id', id)
//       .del();
// },

// router.remove('/:id', async (req, res) => {
//
// });

module.exports = router;