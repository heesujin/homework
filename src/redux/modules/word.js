// word.js

// Actions type 정해주는
// const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
//초기값 설정
const init = {
  list: [
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
      ex: "희수 화이팅 할수이따",
    },
  ],
};
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function createWord(word) {
  return { type: CREATE, word };
}

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// Reducer
export default function reducer(state = init, action = {}) {
  switch (action.type) {
    case "word/CREATE": {
      const new_word = [...state.list, action.word];
      return { list: new_word };
    }
    // do reducer stuff
    default:
      return state;
  }
}
