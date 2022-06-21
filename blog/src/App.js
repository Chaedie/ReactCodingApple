import logo from './logo.svg';
import './App.css';

function App() {
  let postTitle = '리액트 공부하는 법';
  let postContents = `가장 효율적으로 리액트를 공부하는 방법은 무엇이 있을까?에끼 이놈아 왕도가 어딨어 ! 그냥 따라 쳐보면서 토이프로젝트 만들고, 복붙도 하고 \n그러면서 느는거지 언제까지 앉아서 "생각"만할래!!! (물론 좋은 방법은 있을수 있습니다만 아직 저는 잘 모르겠네요 알려주세요 😭😭)`;

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="post">
        <h4>{postTitle}</h4>
        <p>{postContents}</p>
      </div>
    </div>
  );
}

export default App;
