import React from "react";
import Main from "./Main";
import styled from "styled-components";
import Add from "./Add";
import Modify from "./Modify";
import { Route, Switch } from "react-router-dom";
import { db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { createBucket, loadWordFB, addBucketFB } from "./redux/modules/word";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();

  // React.useEffect(async () => {
  //   const query = await getDocs(collection(db, "words"));
  //   console.log(query);
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // }, []);

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  // const docRef = await addDoc(collection(db, 'bucket'), {
  //      completed: false,
  //      text: "new"
  //    })

  return (
    <Container className="App">
      <Route path="/" exact>
        <Main></Main>
      </Route>
      <Route path="/add" exact>
        <Add></Add>
      </Route>
      <Route path="/modify/:index" exact>
        <Modify />
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
  height: 60vh;
  /* vw => viewport width => 화면의 좌우 너비 대비 퍼센트 */
  overflow-y: auto;
  max-height: 60vh;
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
