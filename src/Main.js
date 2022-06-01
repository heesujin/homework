import React, { useEffect } from "react";
import styled from "styled-components";
import App from "./App";
import { Route, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteWordFB } from "./redux/modules/word";

function Main(props) {
  const params = useParams();
  const word_index = params.index;
  const history = useHistory();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);

  // useEffect(() => {
  //   console.log(word_list);
  // }, []);

  return (
    <All>
      <Title>MY DICTIONARY</Title>

      {word_list.map((value, index) => {
        // console.log(value.id);
        return (
          <Word key={index}>
            <Btns>
              <Btn
                onClick={() => {
                  history.push("/modify/" + value.id);
                }}
              >
                📑
              </Btn>
            </Btns>
            <Btns>
              <Btnn
                onClick={() => {
                  dispatch(deleteWordFB(value.id));
                }}
              >
                🗑️
              </Btnn>
            </Btns>

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

  position: relative;
  /* height: 60vw; */
  /* overflow-y: auto; */
  /* max-height: 60vw; */
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

// const Btnback = styled.div`
//   background-color: transparent;
// `;

const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Btnn = styled.div`
  margin-top: -26px;
  margin-right: 10px;
  font-size: 20px;
`;

const Btn = styled.div`
  margin-right: 40px;
  font-size: 18px;
`;

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
