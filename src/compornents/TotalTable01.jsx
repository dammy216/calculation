import React from 'react'
import "./Table.css"

const TotalTable01 = ({subject, unit, value01, value02}) => {

const calc = value01 + value02

  return (
    <div>
        <table border={1} className ="totalTable">
        <tbody>
        <tr>
          <th>科目名</th>
          <th>必須単位</th>
          <th>合計単位</th>
          <th>不足単位</th>
        </tr>
        <tr>
         <td className="totalSubject">{subject}</td>
         <td>{unit}</td>
         <td>{calc}</td>
         <td>{Math.max(unit-calc,0)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TotalTable01