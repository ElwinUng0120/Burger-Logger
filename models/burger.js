const orm = require('../config/orm.js');

const burger = {
    
    getBurger: function(id){
        return orm.getBurger((id ? id : ""));
    },

    setBurger: function (id, state){
        return orm.setBurger(id, state);
    },

    addBurger: function(name){
        return orm.addBurger(name);
    },

    clearBurgers: function(){
        return orm.clearBurgers();
    }
    
}

module.exports = burger;