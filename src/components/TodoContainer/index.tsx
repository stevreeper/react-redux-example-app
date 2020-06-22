import React from "react";

import { Todo, TodoActions } from "../../store/todo/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Checkbox } from "@material-ui/core";
import { Container, Label } from "./styles";

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
    <Container>
      <Checkbox
        checked={todo.completed}
        onChange={handleCheck}
        id={String(todo.id)}
      />
      <Label htmlFor={String(todo.id)} isCompleted={todo.completed}>
        {todo.title}
      </Label>
    </Container>
  );
};

export default TodoContainer;
