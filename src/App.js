import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container/>
      <Container2/>
      <Container3/>
    </div>
  )
}

function Header() {
  return (
    <h1>React 프로그래밍</h1>
  )
}

function Playlist() {
  return (
    <div className="playlist">
      프로그래밍하면서 듣고 싶은 노래
    </div>
  )
}

function Container() {
  return (
    <div className='container'>
        <a href="https://www.youtube.com/results?search_query=링딩동">
          <img 
            src='https://picsum.photos/600/150?random=1'
            alt='랜덤 이미지 1'/>
          <div className='song-title'>
            링딩동
          </div>
        </a>
    </div>
  )
}

function Container2() {
  return (
    <div className='container'>
        <a href="https://www.youtube.com/results?search_query=루시퍼">
          <img 
            src='https://picsum.photos/600/150?random=2'
            alt='랜덤 이미지 2'/>
          <div className='song-title'>
            루시퍼
          </div>
        </a>
    </div>
  )
}

function Container3() {
  return (
    <div className='container'>
        <a href="https://www.youtube.com/results?search_query=루시퍼">
          <img 
            src='https://picsum.photos/600/150?random=3'
            alt='랜덤 이미지 3'/>
          <div className='song-title'>
            독도는 우리땅
          </div>
        </a>
    </div>
  )
}

export default App
