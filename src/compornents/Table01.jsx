import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import "./Table.css"
import useLocalStorage from './useLocalStorage';

const Table01 = ({subject, unit, setValue01}) => {
  
  const [count01,setCount01] = useLocalStorage("count01", 0);

  setValue01(count01);

const handleClick = (action) => {
    
    switch (action.type) {
      case "plus2":
          setCount01(count01+2);
        break;
      case "plus1":
          setCount01(count01+1);
        break;
        case "minus2":
          setCount01(Math.max(count01-2,0))
        break;
        case "minus1":
          setCount01(Math.max(count01-1,0))
          break;
      default:
        break;
      }
    }
    
  return (
    <div>
      <table border={1}>
        <tbody>
        <tr>
          <th>科目名</th>
          <th>必須単位</th>
          <th>２単位追加/取消</th>
          <th>１単位追加/取消</th>
          <th>合計単位</th>
          <th>不足単位</th>
        </tr>
        <tr>
         <td rowSpan={2} className="subject">{subject}</td>
        <td rowSpan={2}>{unit}</td>
        <td><AddCircleIcon onClick = {() => handleClick({type: "plus2"})}/></td>
        <td><AddCircleIcon onClick = {() => handleClick({type: "plus1"})}/></td>
        <td rowSpan={2}>{count01}</td>
        <td rowSpan={2}>{Math.max(unit-count01,0)}</td>
        </tr>
        <tr>
          <td><RemoveCircleIcon onClick = {() => handleClick({type: "minus2"})}/></td>
          <td><RemoveCircleIcon onClick = {() => handleClick({type: "minus1"})}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table01