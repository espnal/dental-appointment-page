// import React from 'react'
import aboutImag from '../../assets/images/chey.jpg';
import aboutCardImg from '../../assets/images/about-card-cheylin.png';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ==============About img=============== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImag} alt="about image" className=' rounded-2xl'/>
                    <div className="absolute z-20 bottom-12 w-[150px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt="aboutCardImg" className='w-full rounded-2xl' />
                    </div>
                </div>
                {/* ================About Content=============== */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading">
                        Orgullosa de ser una de las mejores preparadas 
                    </h2>
                    <p className="text__para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim voluptatibus, sint non, porro reiciendis commodi dolorem sapiente mollitia atque, tempore laudantium veniam ut praesentium neque rerum quia temporibus necessitatibus.
                    </p>
                    <p className="text__para mt-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim voluptatibus, sint non, porro reiciendis commodi dolorem sapiente mollitia atque, tempore laudantium veniam ut praesentium neque rerum quia temporibus necessitatibus.
                    </p>
                    <Link to="/">
                        <button className="btn">Aprende Mas</button>
                        </Link>
                </div>
            </div>
        </div>
      </section>
    )
  
}

export default About
