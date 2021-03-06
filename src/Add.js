import React from "react";
import styled from "styled-components";
import { Link, Route, useHistory } from "react-router-dom";
import { addWordFB, createWord } from "./redux/modules/word";
import { db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
// import {addWordFB} from "./redux/modules/word";

function Add(props) {
  const my_list = React.useRef([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const addWord = () => {
    const myList = my_list.current;

    console.log({
      word: myList[0].value,
      explanation: myList[1].value,
      ex: myList[2].value,
    });

    dispatch(
      addWordFB({
        word: myList[0].value,
        explanation: myList[1].value,
        ex: myList[2].value,
      })
    );
  };
  return (
    <All>
      <Title>단어 추가하기</Title>
      <Words>
        <Stitle>단어</Stitle>
        <CExplanation type="text" ref={(el) => (my_list.current[0] = el)} />
      </Words>
      <Word>
        <Stitle>설명</Stitle>
        <CExplanation type="text" ref={(el) => (my_list.current[1] = el)} />
      </Word>
      <Word>
        <Stitle>예시</Stitle>
        <CExplanation type="text" ref={(el) => (my_list.current[2] = el)} />
      </Word>
      <Link to="/">
        <Btn onClick={addWord}>추가하기</Btn>
      </Link>
    </All>
  );
}

const All = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* margin-left: 10px; */
  /* border: 1px solid white;
  background-color: white; */
`;

const Stitle = styled.p`
  text-decoration: underline;
  font-size: 12px;
`;

// const Explanation = styled.h4`
//   margin-top: -10px;
// `;

const CExplanation = styled.input`
  margin-top: -20px;
  width: 300px;
  height: 30px;
`;

const Title = styled.h2`
  margin-left: 10px;
`;

const Word = styled.div`
  border: 1px solid white;
  background-color: white;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
`;
const Words = styled.div`
  border: 1px solid white;
  background-color: white;
  margin: 10px;
  padding: 5px;
  margin-top: -7px;
  border-radius: 5px;
`;

const Btn = styled.button`
  height: 40px;
  width: 320px;
  margin: auto;
  margin-left: 15px;
  margin-bottom: 20px;
  margin-top: 30px;
  background-color: #fade7d;
  border: 0;
  border-radius: 10px;
`;

export default Add;
