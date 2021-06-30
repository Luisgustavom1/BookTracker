import Header from './components/header'
import InputAndCards from './components/inputAndCards'
import './styles/global.css'
import './styles/body.css'

function App() {
  return (
    <body>
      <div className='body'>
        <Header></Header>
        <InputAndCards></InputAndCards>
      </div>
    </body>
  );
}

export default App;
