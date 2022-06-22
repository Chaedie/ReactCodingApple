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

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{postTitle[0]}</h4>
        <p>{postTime[0]}</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>{postTime[1]}</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>{postTime[2]}</p>
      </div>
      {/* <div className="post">
        <h4>{postTitle}</h4>
        <p>{postContents}</p>
      </div> */}
    </div>
  );
}

export default App;
