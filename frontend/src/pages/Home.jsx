// import React from 'react'
import heroImg01 from '../assets/images/muestra_diente.jpg';
import heroImg02 from '../assets/images/pac.jpg';
import heroImg03 from '../assets/images/pac2.jpg';
import icon01 from '../assets/images/espc.jpg';
import icon02 from '../assets/images/map.jpg';
import icon03 from '../assets/images/agendar.jpg';
import avatarIcon from '../assets/images/avatar-icon-2.png'
import featureImg from '../assets/images/eval.jpg';
import videoIcon from '../assets/images/video-icon.png';
import faqimg from '../assets/images/faq.jpg';

import About from '../components/About/About';
import TratamientosList from '../components/Tratamientos/TratamientosList';
import TratamientoTable from '../components/Tratamientos/TratamientoTable';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import FaqList from '../components/Faq/FaqList'; 
import Testimonials from '../components/Testimonials/Testimonials';
const Home = () => {
  return <>
      {/* ========= Hero section ========== */}
      <section className="hero__section pt-[60px] 2xl:h[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        
            {/* ========== Hero content =========== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Transforma Tu Sonrisa y Brilla con Confianza.
                </h1>
                <p className="text__para">
                Deja tu salud en manos profesioanles. Ofrecemos cuidado dental 
                de calidad, procedimientos avanzados y atención personalizada 
                para mantener tu sonrisa radiante y saludable.
                </p>

                <button className="btn">
                Solicitar una cita
                </button>
                {/* ======Here counter======= */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">12+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p>Años de experiencia</p>
                  </div>

                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p>Clinicas</p>
                  </div>

                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p>Pacientes Satisfechos</p>
                  </div>
                </div>

                
              </div>
            </div>
            {/* ========== Hero content =========== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-2xl" src={heroImg01} alt="heroImage" />
              </div>
              <div className="w-[210px] h-[240px] mt-[30px] hidden sm:block">
                <img src={heroImg02} alt="HeroImage" className="w-full mb-[30px] rounded-2xl"/>
                <img src={heroImg03} alt="HeroImage" className="w-full rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470] mx-auto">
            <h2 className="heading text-center">
              Proveyendo los mejores servicios dentales
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, itaque labore!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Conoce tu especialista</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident officia perspiciatis fuga architecto. Odio voluptas minus dicta ipsa aspernatur nihil voluptate, consequuntur neque.
                </p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>

              
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Encuentra la locacion</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident officia perspiciatis fuga architecto. Odio voluptas minus dicta ipsa aspernatur nihil voluptate, consequuntur neque.
                </p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>

              
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon" className='w-[400px]'/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Agenda tu cita</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident officia perspiciatis fuga architecto. Odio voluptas minus dicta ipsa aspernatur nihil voluptate, consequuntur neque.
                </p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>

              
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* ================ Services Section =============== */}
        <div className="container">
          <div className="xl:w-[480px] mx-auto">
            <h2 className="heading text_center flex flex-row flex-nowrap">
              Nuestros Tratamientos Dentales
            </h2>
            <p className="text__para text-center ">
              Lorem ipsum dolor sit amet consectetur necessitatibus autem, nobis, illum voluptatem dignissimos atque molestias quibusdam ipsa et recusandae, qui perspiciatis iure iste enim.
            </p>
          </div>
          <TratamientosList />
          <TratamientoTable />
        </div>

      {/* ================ Services Section End =============== */}
      
      {/* ================ Feature Section =============== */}
    <section>
      <div className="container">
        <div className="flex item-center justify-between flex-col lg:flex-row">
          {/* ========== Feature Content ========= */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Consigue una consulta virtual <br /> en cualquier momento
            </h2>
            <ul className="pl-4">
              <li className="text__para">
                1. Agenda tu cita directamente
              </li>
              <li className="text__para">
                2. Ubica el consultorio aqui
              </li>
              <li className="text__para">
                3. La doctora esta constamente recibiendo pacientes, usa la herramienta de agendar cita 
                para selecionar la fecha que mas te convenga
              </li>
            </ul>
            <Link to='/'><button className="btn">Aprende Mas</button></Link>
          </div>
          {/* ============ Feature Img ============ */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4 rounded-2xl" alt="featureImg" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="videoIcon" />
                </span>
              </div>
              <div className="text text-center w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[14px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                Consulta
              </div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt="avatarIcon" />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Cheylin Pena Espinal</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =========== Feature section end ============ */}
{/* =========== FAQ section ============ */}
<section>
  <div className="container">
    <div className="flex justify-between gap-[50px] la:gap-0">
      <div className="w-1/2 hidden md:block ">
        <img className='rounded-2xl' src={faqimg} alt="faqimg" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="heading">
        Preguntas mas comunes de mis pacientes
        </h2>
        <FaqList/>
      </div>
    </div>
  </div>
</section>
{/* =========== FAQ section end ============ */}

{/* =========== Testimonials ============ */}
<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">
        Que dicen los pacientes
      </h2>
      <p className="text__para text center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,  ipsum maxime fugit, no
      </p>
    </div>
    <Testimonials/>
  </div>
</section>
{/* =========== Testimonials end ============ */}
    </>
 
}

export default Home
