import * as express from 'express';
import { createServer } from 'http';
import * as socketIO from 'socket.io';

let app = express();
let http = createServer(app);
let io = socketIO(http);

let todoList = [];

io.on('connection', socket => {
  console.log('user connected');

  socket.emit('todo', JSON.stringify(todoList));

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('add-todo', todo => {
    todoList.push(todo);

    io.emit('todo', todoList);
  });

  socket.on('edit-todo', partialTodo => {
    let todo = todoList.find(item => partialTodo.id === item.id);

    const index = todoList.findIndex(item => todo.id === item.id);

    todo = { ...todo, ...partialTodo };

    todoList = Object.assign([...todoList], { [index]: todo });

    io.emit('todo', todoList);
  });
});

http.listen(5000, () => {
  console.log('started on port 5000');
});
