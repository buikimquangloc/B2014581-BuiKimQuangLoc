const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");

exports.create = async (req, res) => {
    res, send({ message: "create handler" });
};

exports.findAll = async (req, res) => {
    res, send({ message: "findAll handler" });
};

exports.findOne = async (req, res) => {
    res, send({ message: "findOne handler" });
};

exports.update = async (req, res) => {
    res, send({ message: "update handler" });
};

exports.delet = async (req, res) => {
    res, send({ message: "delete handler" });
};

exports.deleteAll = async (req, res) => {
    res, send({ message: "fdeleteAll handler" });
};

exports.findAllFavorite = async (req, res) => {
    res, send({ message: "findAllFavorite handler" });
};