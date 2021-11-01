var express = require('express')
var router = express.Router();
router.use(express.json());

const db = require('../db/database');


/* GET all bets. */
router.get('/', async function(req, res) {
  db.Bet.findAll({
    where: {},
    include: [{
      model: db.Team,
      where: {}
    }]
  })
    .then (bets => res.status(200).json({
      status: 'OK',
      statusMessage: 'success',
      respObj: {
        bets: bets
      }
    }))
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
});

/* PUT bet with params {team_id} {amount}. */
router.put('/', async function(req, res) {
  const { team_id, amount } = req.body
  db.Bet.create({
    TeamId: team_id,
    amount: amount
    })
    .then( bet => {
        res.status(201).send(JSON.stringify(bet));
    })
    .catch( err => {
        res.status(500).send(JSON.stringify(err));
  });
});

/* DELETE bet with params {id}. */
router.delete('/:id', async function(req, res) {
  const id = req.params.id
  db.Bet.destroy({
    where: { id: id }
  })
    .then( () => {
      res.status(200).send(`Deleted bet with id: ${id}`);
    })
    .catch( err => {
      res.status(500).send(JSON.stringify(err));
    });

});

module.exports = router;
