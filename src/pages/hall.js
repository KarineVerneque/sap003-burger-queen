import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Breakfast from '../components/breakfast'
import Dinner from '../components/dinner'
import NavBar from '../components/menuNavBar'

function Hall() {
  //const [counter, setCounter] = useState(0);
  return (
    <>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/Dinner">
            <Dinner />
          </Route>
          <Route path="/breakfast" component={Breakfast}/>
        </Switch>
      </div>
    </Router>

    {/*<p contenteditable="true">{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Contador</button>*/}
    </>
  )  
};
export default Hall;















/*
<Button 
  products={breakfast} 
  title="Café da manhã" 
  onClick={clienteOrder}
/>
<br /><br />
<Button 
  products={dinner} 
  title="Jantar" 
  onClick={clienteOrder}
/>
<br /><br />
<Button products={data.filter(product => product.breakfast !== "true")} title="Jantar"/><br /><br />
*/


/*
function xuxu() {
const [counter, setCounter] = useState(0);

{ <p contenteditable="true">{counter}</p> }
{ <button onClick={() => setCounter(counter + 1)}>Contador</button> }

}
*/
