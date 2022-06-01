// word.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import win from "global";

// Actions type 정해주는
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const LOADED = "bucket/LOADED";
//초기값 설정(initialState)
const init = {
  list: [
    // {
    //   word: "ㅎ1ㅎ1",
    //   explanation: "히히를 변형한 단어. 'ㅣ'를 숫자1로 쓴것",
    //   ex: "저 친구가 초콜릿을 줬어 ㅎ1ㅎ1",
    // },
    // {
    //   word: "지니",
    //   explanation: "알라딘에 램프를 문지르면 나오는 파란 괴물",
    //   ex: "지니야 소원을 들어줘",
    // },
    // {
    //   id: "4v5O"
    //   word: "희수",
    //   explanation: "26살 게으름뱅이",
    //   ex: "희수 화이팅 할수이따",
    // },
  ],
};
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

export function updateWord(word) {
  return { type: UPDATE, word };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}
// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

//middliwares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });

      dispatch(loadWord(word_list));
    });
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    //   dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "word"), word);
    const word_data = { id: docRef.id, ...word };
    // console.log(bucket_data);
    // console.log((await getDoc(docRef)).data());

    dispatch(createWord(word_data));
  };
};

export const updateWordFB = (word) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "word", word.index);
    await updateDoc(docRef, word);

    dispatch(updateWord({ ...word }));
  };
};

export const deleteWordFB = (word) => {
  console.log(word);
  return async function (dispatch, getState) {
    const docRef = doc(db, "word", word);
    await deleteDoc(docRef);

    console.log(getState().word.list);

    const word_list = getState().word.list;
    const new_word = word_list.filter((value) => value.id === word);
    // console.log("test", new_word);
    dispatch(deleteWord({ new_word }));
  };
};

// Reducer
export default function reducer(state = init, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list, is_loaded: true };
    }
    case "word/CREATE": {
      const new_word = [...state.list, action.word];
      return { list: new_word };
    }
    case "word/UPDATE": {
      const arr = [...state.list].map((value) => {
        if (value.index === action.word.index) {
          return { ...value, ...action.word };
        } else {
          return value;
        }
      });
      return { list: arr };
    }
    case "word/DELETE": {
      console.log("action", action.word_index);
      console.log("state", state);
      const arr = [...state.list].filter((value) => {
        if (value.index === action.word_index.new_word[0].index) {
          return false;
        } else {
          return true;
        }
      });
      // js듣고 나중에 filter, map, reduce, forEach 연습해보기, =>
      return { list: arr };
    }
    // do reducer stuff
    default:
      return state;
  }
}
