import { Route, Routes, useNavigate } from 'react-router-dom';
import '../node_modules/bulma/bulma.sass';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const App:React.FC = () => {
  const router = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/second' element={<SecondPage />} />
        </Routes>
      </header>
      <section className='section'>
        <button className='button is-primary' onClick={() => router('/second')}>Second Page</button>
      </section>
    </div>
  );
}

export default App;
