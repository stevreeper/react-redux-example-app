import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  &.loader {
    align-items: center;
  }

  .add-container {
    height: 48px;
    margin-bottom: 20px;
  }
`;
