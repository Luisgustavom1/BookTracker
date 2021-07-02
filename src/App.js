import Header from './components/header'
import Input from './components/input'
import AppProvider from './appContext/provider'

import './styles/global.css'
import './styles/body.css'

function App() {
  return (
    <AppProvider>
      <body>
        <div className='body'>
          <Header></Header>
          <Input></Input>
        </div>
      </body>
    </AppProvider>
  );
}

export default App;
