import './App.css';
import Router from "./utils/Routing";
import Wrapper from "./utils/AuthWrapper";


function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>

  );
}

export default App;
