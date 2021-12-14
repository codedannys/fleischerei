import './App.css';
import Menue from './menuekarten/kw1.json';





const MontagsEssen = Menue.Montag;
const DienstagEssen = Menue.Dienstag;
const MittwochEssen = Menue.Mittwoch;
const DonnerstagEssen = Menue.Donnerstag;
const FreitagEssen = Menue.Freitag;


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
  let requestUrl = 'https://www.danny-schreier.de/kw1.json';
  let request = new XMLHttpRequest();

  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  request.onload = function(){
    const data = request.response;
    console.log(data);
  }

  return (
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
