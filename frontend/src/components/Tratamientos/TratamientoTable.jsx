// import React from 'react'
import TableCont from './TableCont';

const TratamientoTable = () => {
  return (
    <div className="py-[35px] lg:mx-16 mt-[55px] h-full md:mx-0">
        <h2 className="text-[26px] text-center text-headingColor font-[700] pb-[66px] ">Costo De servicios Endodonticos Con Materiales Incluidos</h2>
        <div className='overflow-scroll'>
          <table className='w-full min-w-max table-auto text-left'>
              <thead className='bg-gray-50 boder-b2 border-gray-200'>
                  <tr>
                      <th className="pl-4 py-1 text-[20px] tracking-wide">Procedimiento</th>
                      <th className="pl-4 py-1 text-[20px] tracking-wide">Precio RD$</th>
                  </tr>
              </thead>
              <TableCont/>
          </table>
          </div>
    </div>
  )
}

export default TratamientoTable
