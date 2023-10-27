const express = require('express');
const router = express.Router();
const evCharge = require("../services/evCharge");

/* GET evCharge. */
router.get('/car_info', async function(req, res, next) {
  try {
    res.json(await evCharge.getMultiple_car(req.query.page));
  } catch (err) {
    console.error(`Error while getting evCharge `, err.message);
    next(err);
  }
});
router.get('/charger_info', async function(req, res, next) {
  try {
    res.json(await evCharge.getMultiple_charge(req.query.page));
  } catch (err) {
    console.error(`Error while getting evCharge `, err.message);
    next(err);
  }
});
router.get('/edge_info', async function(req, res, next) {
  try {
    res.json(await evCharge.getedges());
  } catch (err) {
    console.error(`Error while getting evCharge `, err.message);
    next(err);
  }
});
router.get('/device_info', async function(req, res, next) {
  try {
    res.json(await evCharge.getDevices());
  } catch (err) {
    console.error(`Error while getting Devices `, err.message);
    next(err);
  }
});

/* POST evCharge */
router.post('/add_car', async function(req, res, next) {
    try {
      res.json(await evCharge.create_car(req.body));
    } catch (err) {
      console.error(`Error while creating evCharge`, err.message);
      next(err);
    }
  });

  router.post('/add_charger', async function(req, res, next) {
    try {
      res.json(await evCharge.create_charger(req.body));
    } catch (err) {
      console.error(`Error while creating evCharge`, err.message);
      next(err);
    }
  });
  router.post('/add_edge', async function(req, res, next) {
    try {
      res.json(await evCharge.add_Edge(req.body));
    } catch (err) {
      console.error(`Error while creating evCharge`, err.message);
      next(err);
    }
  });
  router.post('/add_device', async function(req, res, next) {
    try {
      res.json(await evCharge.add_Device(req.body));
    } catch (err) {
      console.error(`Error while creating Device`, err.message);
      next(err);
    }
  });

/* PUT evCharge */
router.put('/update_car/:id', async function(req, res, next) {
    try {
      res.json(await evCharge.update_car(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating evCharge`, err.message);
      next(err);
    }
  });
  router.put('/update_charger/:id', async function(req, res, next) {
    try {
      res.json(await evCharge.update_charger(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating evCharge`, err.message);
      next(err);
    }
  });
  
  /* DELETE evCharge */
router.delete('/del_car/:id', async function(req, res, next) {
    try {
      res.json(await evCharge.remove_car(req.params.id));
    } catch (err) {
      console.error(`Error while deleting evCharge`, err.message);
      next(err);
    }
  });
  router.delete('/del_charger/:id', async function(req, res, next) {
    try {
      res.json(await evCharge.remove_charger(req.params.id));
    } catch (err) {
      console.error(`Error while deleting evCharge`, err.message);
      next(err);
    }
  });
  
module.exports = router;