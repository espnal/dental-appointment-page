/* eslint-disable no-unused-vars */
import React from 'react'
import tratamiento from '../assets/data/tratamientos'
import TratamientoCard from '../components/Tratamientos/TratamientosCard'
const Tratamientos = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {tratamiento.map((item, index) => (
          <TratamientoCard item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Tratamientos
