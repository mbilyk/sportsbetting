var express = require('express')
var router = express.Router();
router.use(express.json());

const db = require('../db/database');


/* GET all teams. */
router.get('/', async function(req, res) {
  db.Team.findAll()
    .then (teams => res.status(200).json({
      status: 'OK',
      statusMessage: 'success',
      respObj: {
        teams: teams
      }
    }))
    .catch(err => {
      res.status(500).json({
        status: 'ERROR',
        statusMessage: `${err.detail}`,
        respObj: {}
      });
    });
});

/* PUT create team listing. */
router.put('/', function(req, res) {
  const { name } = req.body
  db.Team.create({
      name: name
      })
      .then( team => {
        res.status(201).json({
          status: 'OK',
          statusMessage: 'success',
          respObj: {
            team: team
          }
        });
      })
      .catch( err => {
          res.status(500).json({
            status: 'ERROR',
            statusMessage: `${err.detail}`,
            respObj: {}
          });
      });
});

module.exports = router;
