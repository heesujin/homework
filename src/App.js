import React from "react";
import Main from "./Main";
import styled from "styled-components";
import Add from "./Add";
import { Route, Switch } from "react-router-dom";

function App() {
  const [list, setList] = React.useState([
    {
      word: "ㅎ1ㅎ1",
      explanation: "히히를 변형한 단어. 'ㅣ'를 숫자1로 쓴것",
      ex: "저 친구가 초콜릿을 줬어 ㅎ1ㅎ1",
    },
    {
      word: "지니",
      explanation: "알라딘에 램프를 문지르면 나오는 파란 괴물",
      ex: "지니야 소원을 들어줘",
    },
    {
      word: "희수",
      explanation: "26살 게으름뱅이",
      ex: "희수 화이팅",
    },
  ]);
  return (
    <Container className="App">
      <Route path="/" exact>
        <Main list={list}></Main>
      </Route>
      <Route path="/add" exact>
        <Add></Add>
      </Route>
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid #aeaeae;
  width: 350px;
  margin: 30px auto;
  background-color: #b4dce1;
  /* background-color: white; */
  height: 60vw;
  overflow-y: auto;
  max-height: 60vw;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  position: relative;
`;

export default App;
