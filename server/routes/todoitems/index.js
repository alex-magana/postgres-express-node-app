const todoItemsController = require('../../controllers').todoItems;

module.exports = (app) => {
    app.post('/api/todos/:todoId/items', todoItemsController.create);
}