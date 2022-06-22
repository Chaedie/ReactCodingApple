/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let postContents = `가장 효율적으로 리액트를 공부하는 방법은 무엇이 있을까?에끼 이놈아 왕도가 어딨어 ! 그냥 따라 쳐보면서 토이프로젝트 만들고, 복붙도 하고 \n그러면서 느는거지 언제까지 앉아서 "생각"만할래!!! (물론 좋은 방법은 있을수 있습니다만 아직 저는 잘 모르겠네요 알려주세요 😭😭)`;
  let [postTitle, setpostTitle] = useState([
    '리액트 공부하는 법',
    '스테이트 사용하는 법',
    '디스트럭쳐링이란?',
  ]);
  let [postTime, setpostTime] = useState(['6월 21일 발행', '6월 22일 발행', '6월 23일 발행']);
  let [좋아요, set좋아요] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...postTitle];
          copy[1] = '스테이트 바꾸는 방법';
          setpostTitle(copy);
        }}
      >
        🚀
      </button>
      <button
        onClick={() => {
          let copy = [...postTitle.sort()];
          setpostTitle(copy);
        }}
      >
        정렬하기!
      </button>
      <div className="list">
        <h4>
          {postTitle[0]} <span onClick={() => set좋아요(좋아요 + 1)}>👍</span> {좋아요}
        </h4>
        <p>{postTime[0]}</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>{postTime[1]}</p>
      </div>
      <div className="list">
        <h4 onClick={() => setModal(!modal)}>{postTitle[2]}</h4>
        <p>{postTime[2]}</p>
      </div>
      {modal ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
