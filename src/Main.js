import React from "react";
import styled from "styled-components";
import App from "./App";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Main(props) {
  const history = useHistory();
  console.log(props.list);
  const data = useSelector((state) => state.word.list);
  console.log(data);
  return (
    <All>
      <Title>MY DICTIONARY</Title>

      {data.map((value, index) => {
        return (
          <Word key={index}>
            <Stitle>단어</Stitle>
            <Explanation>{value.word}</Explanation>
            <Stitle>설명</Stitle>
            <Explanation>{value.explanation}</Explanation>
            <Stitle>예시</Stitle>
            <CExplanation>{value.ex}</CExplanation>
          </Word>
        );
      })}

      <Add
        onClick={() => {
          history.push("/add");
        }}
      >
        +
      </Add>
    </All>
  );
}

const All = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-left: 10px;
  /* border: 1px solid white;
  background-color: white; */
  height: 60vw;
  position: relative;
`;

// const Btnback = styled.div`
//   background-color: transparent;
// `;

const Add = styled.div`
  background-color: #fade7d;
  width: 70px;
  height: 70px;
  text-align: center;
  right: 10px;
  top: 10px;
  line-height: 53px;
  border-radius: 50px;
  font-size: 70px;
  color: white;
  position: fixed;
`;

const Stitle = styled.p`
  text-decoration: underline;
  font-size: 12px;
`;

const Explanation = styled.h4`
  margin-top: -10px;
`;

const CExplanation = styled.h4`
  margin-top: -10px;
  color: skyblue;
`;

const Title = styled.h2`
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Word = styled.div`
  border: 1px solid #eee;
  background-color: white;
  margin: 8px 8px 0px 2px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 10px;
`;

export default Main;
