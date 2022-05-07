import './App.css';
import Router from "./utils/Routing";
import Wrapper from "./utils/AuthWrapper";
import "./styling/admin.tailwind.css";
import "./styling/user.tailwind.css";
import "./styling/global.tailwind.css";


function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>

  );
}

export default App;
