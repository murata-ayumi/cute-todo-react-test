import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number; text: string }[];
  onSave: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onSave, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
