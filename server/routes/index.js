const todos = require('./todos');
const todoItems = require('./todoitems');

module.exports = (app) => {
    todos(app);
    todoItems(app);
};