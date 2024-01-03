import NaveBare from './Components/NaveBar/NaveBare'
import { Route, Switch , Redirect } from "react-router-dom/cjs/react-router-dom";
import HomePage from './Pages/HomePage';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  },[])

  return (
    <>
    <NaveBare/>
      <Switch>
      <Route path="/home" >
      <HomePage/>
        </Route>
        <Route path="/auth" >
        </Route>
        <Route path="/image">
        </Route>
        <Route path="/" exact>
        <Redirect to='home'/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
