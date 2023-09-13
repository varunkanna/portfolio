import { styled } from 'styled-components';
import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Work from './components/Work';
import Tez from './components/Tez';

const Container = styled.div`
  height:100vh;
  background: url("./img/bg.jpeg");
  color:white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
}

export default App;
