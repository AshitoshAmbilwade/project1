import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header title="My App" />
      <Home
        heading="Welcome to My App"
        subtitle="This is the home page where we make learning React practical and fun!"
      />
      <About features={["Fast Performance", "Beautiful UI", "Easy to Learn"]} />
      <Contact />
    </>
  );
};
export default App;
