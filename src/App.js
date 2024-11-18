import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title="링딩동"
      index = '1'/>
      <Container title="루시퍼"
      index = '2'/>
      <Container title="독도는 우리땅"
      index = '3'/>
    </div>
  )
}

const Header = () => {
  return (
    <h1>React 프로그래밍</h1>
  )
}

const Playlist = () => {
  return (
    <div className="playlist">
      프로그래밍하면서 듣고 싶은 노래
    </div>
  )
}

const Container = (props) => {
  return (
    <div className='container'>
        <a href={`https://www.youtube.com/results?search_query=${props.title}`} target="_black">
          <img 
            src={`https://picsum.photos/600/150?random=${props.index}`}
            alt={`${props.title} 이미지`}/>
          <div className='song-title'>
            {props.title}
          </div>
        </a>
    </div>
  )
}

export default App
