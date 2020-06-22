import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  background-color: rgb(235, 235, 235);
  border-radius: 15px;
`;

export const Label = styled.label<{ isCompleted: boolean }>`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;
