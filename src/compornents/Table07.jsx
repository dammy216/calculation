import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import "./Table.css"
import useLocalStorage from './useLocalStorage';

const Table07 = ({subject, unit, setValue07}) => {

  const [count07,setCount07] = useLocalStorage("count07", 0);

  setValue07(count07);

  const handleClick = (action) => {
    
    switch (action.type) {
      case "plus2":
          setCount07(count07+2);
        break;
      case "plus1":
          setCount07(count07+1);
        break;
        case "minus2":
          setCount07(Math.max(count07-2,0))
        break;
        case "minus1":
          setCount07(Math.max(count07-1,0))
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
        <td rowSpan={2}>{count07}</td>
        <td rowSpan={2}>{Math.max(unit-count07,0)}</td>
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

export default Table07;