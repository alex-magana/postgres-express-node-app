const todoItemsController = require('../../controllers').todoItems;

module.exports = (app) => {
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

    // Add a handler for any other methods
    app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
        message: 'Method Not Allowed',
    }));
}