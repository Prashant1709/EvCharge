const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple_car(){
  const rows = await db.query(
    `SELECT *
    FROM car_info `
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  }
}
async function getMultiple_charge(){
  const rows = await db.query(
    `SELECT *
    FROM chargers`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}
async function getedges(){
  const rows=await db.query(
    'SELECT * from edge'
  );
  const data=helper.emptyOrRows(rows);
  return{data}
}
async function getDevices(){
  const rows=await db.query(
    'SELECT * from devices'
  );
  const data=helper.emptyOrRows(rows);
  return{data}
}
async function add_Edge(evCharge) {
  const result = await db.query(
    `INSERT INTO edge
    (edge_id, src_pt, dst_pt, distance) 
    VALUES 
    ('${evCharge.edge_id}', '${evCharge.src_pt}', '${evCharge.dst_pt}', ${evCharge.distance})`
  );

  let message = 'Error in creating charger/car';

  if (result.affectedRows) {
    message = 'charger/car created successfully';
  }

  return {message};
}
async function add_Device(evCharge) {
  const result = await db.query(
    `INSERT INTO devices
    (device_id, ssid, pass) 
    VALUES 
    ('${evCharge.device_id}', '${evCharge.ssid}', '${evCharge.pass}')`
  );

  let message = 'Error in creating device';

  if (result.affectedRows) {
    message = 'device created successfully';
  }

  return {message};
}
async function create_car(evCharge){
    const result = await db.query(
      `INSERT INTO car_info 
      (car_id, battery_life, consumption,current_charge, sources, destination, distance) 
      VALUES 
      ('${evCharge.car_id}', ${evCharge.battery_life}, ${evCharge.consumption},${evCharge.current_charge}, '${evCharge.sources}', '${evCharge.destination}', ${evCharge.distance})`
    );
  
    let message = 'Error in creating charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car created successfully';
    }
  
    return {message};
  }
async function create_charger(evCharge){
    const result = await db.query(
      `INSERT INTO chargers 
      (charger_id, availability, type, Location,lat,lon,isStation,station_available,time_to_get,rate) 
      VALUES 
      ('${evCharge.charger_id}', '${evCharge.availability}', '${evCharge.type}',
       '${evCharge.Location}',${evCharge.lat},${evCharge.lon},${evCharge.isStation},${evCharge.station_available},
       ${evCharge.time_to_get},${evCharge.rate}
       )`
    );
  
    let message = 'Error in creating charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car created successfully';
    }
  
    return {message};
  }
  async function update_car(id, evCharge){
    const result = await db.query(
      `UPDATE car_info 
      SET battery_life=${evCharge.battery_life}, consumption=${evCharge.consumption}, 
      sources = '${evCharge.sources}',
      destination='${evCharge.destination}',
      distance=${evCharge.distance}
      WHERE car_id=${id}` 
    );
  
    let message = 'Error in updating charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car updated successfully';
    }
  
    return {message};
  }

  async function update_charger(id, evCharge){
    const result = await db.query(
      `UPDATE chargers 
      SET availability='${evCharge.availability}', type='${evCharge.type}', 
      Location='${evCharge.Location}'
      WHERE charger_id=${id}` 
    );
  
    let message = 'Error in updating charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car updated successfully';
    }
  
    return {message};
  }
  async function remove_car(id){
    const result = await db.query(
      `DELETE FROM car_info WHERE car_id=${id}`
    );
  
    let message = 'Error in deleting charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car deleted successfully';
    }
  
    return {message};
  }
  async function remove_charger(id){
    const result = await db.query(
      `DELETE FROM chargers WHERE charger_id=${id}`
    );
  
    let message = 'Error in deleting charger/car';
  
    if (result.affectedRows) {
      message = 'charger/car deleted successfully';
    }
  
    return {message};
  }
module.exports = {
  getMultiple_car,
  create_car,
  update_car,
  remove_car,
  getMultiple_charge,
  create_charger,
  update_charger,
  remove_charger,
  add_Edge,
  getedges,
  add_Device,
  getDevices
}