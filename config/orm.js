const db = require('./connection.js');

function getBurger(id){
    return db.query("SELECT * FROM burgers" + (id ? `WHERE id=${id}` : ""));
}

function setBurger(id, state){
    return db.query("UPDATE burgers SET eaten=? WHERE id=?", [state, id]);
}

function addBurger(name){
    return db.query("INSERT INTO burgers (`name`) VALUES(?)", [name]);
}

module.exports = { getBurger, setBurger, addBurger }