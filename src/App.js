import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './Navbar';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';



function App() {

  const [data, setData] = useState([]);


  
  const [icons, setIcons] = useState([]);
  const [jumbotron1, setJumbotron1] = useState([]);
  
  const [jumbotron2, setJumbotron2] = useState([]);
  const [ti2, setTI2] = useState([]);
  const [services2, setServices2] = useState([]);
  const [jumbotron3, setJumbotron3] = useState([])

  const urls=['data.json','data2.json','data3.json'];

  function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseJSON(response) {
return response.json();
}
const getData=()=>{
  Promise.all(urls.map(url =>
    fetch(url)
        .then(checkStatus)  // check the response of our APIs
        .then(parseJSON)    // parse it to Json
        .catch(error => console.log('There was a problem!', error))
))
    .then(data => {
        
        const page1 = data[0];
        const page2 = data[1];
        console.log(page2);
        setData(data[0].Services);
        setJumbotron1(data[0].Jumbotron);

        
        setIcons(data[1].About);
        setJumbotron2(data[1].Jumbotron)
        setTI2(data[1].TextImg)
        setServices2(data[1].Services);
        setJumbotron3(data[2].Jumbotron)
    })
  }
useEffect(()=>{
    getData()
  },[])



  return (
    <div className="App">

      <Navbar/>
      <Switch>
        <Route exact path="/"><Home data={data} jumbotron1={jumbotron1} /></Route>
            <Route exact path="/about"><About icons={icons} jumbotron2={jumbotron2} services={services2} ti2={ti2}/></Route>
        <Route ><Error jumbotron3={jumbotron3}/></Route>
      </Switch>
    </div>
  );
}

export default App;
