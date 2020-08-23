import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import TodoContainer from "../../components/TodoContainer";
import {
  CircularProgress,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { TodoCreators } from "../../store/todo";
import { Container } from "./styles";
import { Check } from "@material-ui/icons";

export default function Home() {
  const addTodoRef = useRef<HTMLInputElement>();

  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoCreators.fetchTodos());
  }, [dispatch]);

  function handleAddTodo() {
    if (addTodoRef.current?.value)
      dispatch(TodoCreators.addTodo(addTodoRef.current.value));
  }

  if (isLoading)
    return (
      <Container className="loader">
        <CircularProgress />
      </Container>
    );

  if (error) console.log(error);

  return (
    <Container>
      <div className="add-container">
        <TextField
          inputRef={addTodoRef}
          placeholder="Wash the dishes..."
          label="New Todo"
          fullWidth
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleAddTodo}>
                  <Check />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      {todos.map((todo) => (
        <TodoContainer key={todo.id} todo={todo} />
      ))}
    </Container>
  );
}
