import { useState } from 'react';
import './App.css';
import Table01 from './compornents/Table01';
import Table02 from './compornents/Table02';
import Table03 from './compornents/Table03';
import Table04 from './compornents/Table04';
import Table05 from './compornents/Table05';
import Table06 from './compornents/Table06';
import Table07 from './compornents/Table07';
import Table08 from './compornents/Table08';
import TotalTable01 from './compornents/TotalTable01';
import TotalTable02 from './compornents/TotalTable02';


function App() {

const [value01, setValue01] = useState(0);
const [value02, setValue02] = useState(0);
const [value03, setValue03] = useState(0);
const [value04, setValue04] = useState(0);
const [value05, setValue05] = useState(0);
const [value06, setValue06] = useState(0);
const [value07, setValue07] = useState(0);
const [value08, setValue08] = useState(0);

  return (

    <div className="App">

     <div>
      <h1>calculation</h1>
     </div>

      <div className="element">

      <div className='block'>
     <div className='table'>
      <Table01 subject = "全学共通科目" unit = {10} setValue01 = {setValue01}/>
         
      <Table02 subject = "学部共通科目" unit = {1} setValue02 = {setValue02}/>
      </div>

      <TotalTable01  subject = "全学共通科目/学部共通科目" unit = {31} value01 = {value01} value02 = {value02}/>

      </div>

      <hr />

      <div className="block">
      <div className="table">
      <Table03 subject = "専門基礎科目" unit = {12} setValue03 = {setValue03}/>
         
      <Table04 subject = "経営分野専門科目" unit = {26} setValue04 = {setValue04}/>
         
      <Table05 subject = "会計分野専門科目" unit = {6} setValue05 = {setValue05}/>
         
      <Table06 subject = "情報分野専門科目" unit = {6} setValue06 = {setValue06}/>

      <Table07 subject = "経済分野専門科目" unit = {6} setValue07 = {setValue07}/>

      <Table08 subject = "演習・卒業研究" unit = {5} setValue08 = {setValue08}/>
      </div>

      <TotalTable02  subject = "専門教育科目" unit = {93} value03 = {value03} value04 = {value04} value05 = {value05} value06 = {value06} value07 = {value07} value08 = {value08} />
      </div>

      </div>

    </div>
  );
}

export default App;
