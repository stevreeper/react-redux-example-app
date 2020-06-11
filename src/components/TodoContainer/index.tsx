import React from "react";

import "./styles.css";
import { Todo, TodoActions } from "../../store/todo/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Checkbox } from "@material-ui/core";

interface TodoContainerProps {
  todo: Todo;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todo }) => {
  const { error } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch({
      type: TodoActions.UPDATE_TODO,
      payload: { ...todo, completed: !todo.completed },
    });
  }

  if (error) console.log(error);

  return (
    <div className="container-todo">
      <Checkbox
        checked={todo.completed}
        onChange={handleCheck}
        id={String(todo.id)}
      />
      <label
        htmlFor={String(todo.id)}
        className={todo.completed ? "completed-todo" : ""}
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoContainer;
