var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", async function(req, res){
    const response = await burger.getBurger();
    res.render("index", {burgers: response});
});

router.get("/api/burgers/:id", async function(req, res){
    const response = await burger.getBurger(req.params.id);
    res.send(response);
});

router.put("/api/burgers/:id", async function(req, res){
    const response = await burger.setBurger(req.params.id, req.body.eaten);
    if(response.changedRows == 0 ) return res.status(404).end();
    else res.status(200).end();
});

router.post("/api/burgers", async function(req, res){
    const response = await burger.addBurger(req.body.name);
    res.send(response);
});

module.exports = router;