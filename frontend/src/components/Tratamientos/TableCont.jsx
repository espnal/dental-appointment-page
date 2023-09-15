
import {tableContent} from './../../assets/data/tablecont';

const TableCont = () => {
  
  return (
        <tbody>
          
            {tableContent.map((item, index)=>{
            const isLast = index === tableContent.length - 1;
            const classes = isLast ? "p-4 text-[18px] leading-7 font-[400] text-textColor mt-4" : "p-4 text-[18px] leading-7 font-[400] text-textColor mt-4";
            return (
              <tr key={index} className="even:bg-gray-50">
              <td className={classes}>{item.name}</td>
              <td className={classes}>{item.price}{item.aclaracion != null ? " ("+item.aclaracion+")" : ""}</td>
            </tr>
            )}

            )}
        </tbody>
  )
}

export default TableCont

