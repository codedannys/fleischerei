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

   
    const [test, setTest] = useState(Menue);

    useEffect(() => {
      fetch(requestUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setTest(result);
          }
        )
    }, [test])
   
    
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
