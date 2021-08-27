const express = require("express");
const indexRouter = require("../routes/index");
const dashboardRouter = require("../routes/dashboard");
const loginRouter = require("../routes/login");
const path = require('path');

module.exports = function (app) {
    app.use(express.json());

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, '../views'));

    app.use('/', express.static(path.join(__dirname, '../public')));

    app.use("/", indexRouter);
    app.use("/dashboard", dashboardRouter);
    app.use("/login", loginRouter);
};