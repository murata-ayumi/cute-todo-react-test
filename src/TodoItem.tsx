import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TodoItemProps {
  id: number;
  text: string;
  onSave: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onSave, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleCheck = () => setIsChecked(!isChecked);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== '') {
      onSave(id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isChecked ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
      className="todo-item"
    >
      {isEditing ? null : (
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="todo-checkbox"
        />
      )}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
          className="todo-edit-input"
        />
      ) : (
        <span className="todo-text">{text}</span>
      )}
      <button onClick={handleEdit} className="todo-button">
        <FaEdit />
      </button>
      {isEditing ? null : (
        <button onClick={() => onDelete(id)} className="todo-button">
          <FaTrash />
        </button>
      )}
    </motion.div>
  );
};

export default TodoItem;
