const todosController = require('../../controllers').todos;

module.exports = (app) => {
    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.get('/api/todos/:todoId', todosController.retrieve);
}