// import React from 'react';
import {tratamientos} from './../../assets/data/tratamientos';
import TratamientoCard from './TratamientosCard';
const TratamientosList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {tratamientos.map((item, index) => (
      <TratamientoCard item={item} index={index} key={index}/>
      ))}
    </div>
  )
}

export default TratamientosList
