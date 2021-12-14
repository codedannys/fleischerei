import './App.css';
import {useState, useEffect} from 'react';
import Menue from './menuekarten/kw1.json';


let requestUrl = 'https://raw.githubusercontent.com/codedannys/fleischerei/main/menuekarte/src/menuekarten/kw1.json';





const Tageskarte = ({tagesDatenSatz}) => {
  return(
    tagesDatenSatz.map((test)=>
      <li>{test.name} <span className="essen-preis">{test.preis} €</span></li>
    )
  );
}


const Tag = ({tag,tagesDatenSatz}) => {
  return(
  <div className="wochentag">
      <div className="wochentag-tag">
            <h2>{tag}</h2>
      </div>
            
      <div className="wochentag-essen">
            <Tageskarte tagesDatenSatz={tagesDatenSatz} />
      </div>
  </div>
  );
}





function App() {

    const [error,setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [test, setTest] = useState(Menue);

    useEffect(() => {
      fetch(requestUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setTest(result);
            console.log(test);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
   
    
   
  
    const MontagsEssen = test.Montag;
    const DienstagEssen = test.Dienstag;
    const MittwochEssen = test.Mittwoch;
    const DonnerstagEssen = test.Donnerstag;
    const FreitagEssen = test.Freitag;
  return(
    
    <div >
        <div className="wrapper-menue">
        
          <Tag tag="Montag" tagesDatenSatz={MontagsEssen}/>
          <Tag tag="Dienstag" tagesDatenSatz={DienstagEssen}/>
          <Tag tag="Mittwoch" tagesDatenSatz={MittwochEssen}/>
          <Tag tag="Donnerstag" tagesDatenSatz={DonnerstagEssen}/>
          <Tag tag="Freitag" tagesDatenSatz={FreitagEssen}/>
        </div>
    </div>
    
  );
}

export default App;
