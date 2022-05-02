import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl ">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
