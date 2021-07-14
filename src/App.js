import "./styles.css";
import styled from "styled-components";

import { reducer, defaultState } from "./appReducer";
import { useReducer } from "react";
import Posts from "./Posts/Posts";

const ButtonBar = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  button {
    padding: 12px;
  }
`;

export default function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="App">
      <p>Current counter state: {state.count}</p>

      <ButtonBar>
        <button
          disabled={state.count < 1}
          onClick={() => dispatch({ type: "decrease" })}
        >
          Decrease
        </button>
        <button
          disabled={state.count > 4}
          onClick={() => dispatch({ type: "increase" })}
        >
          Increase
        </button>
      </ButtonBar>

      <Posts countValue={state.count} />
    </div>
  );
}
