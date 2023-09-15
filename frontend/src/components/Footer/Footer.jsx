/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/diente.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiOutlineInstagram} from 'react-icons/ai';

const socialLinks = [
  {
    path: 'https://www.linkedin.com/cheylin',
    icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
  },
  {
    path: 'https://www.instagram.com/cheylin',
    icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
  }
];

const quickLink01 = [
  {
  path: '/home',
  display: 'Home'
},
{
  path: '/doctor',
  display: 'Doctora'
},
{
  path: '/tratamientos',
  display: 'Tratamientos'
},
{
  path: '/contact',
  display: 'Contacto'
},
];
const Footer = () => {
  const year = new Date().getFullYear

  return (
  <footer className="pb-16 pt-10">
    <div className="container">
      <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
            <img src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright ©{year} developed by Roguin Pena all right reserved.</p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index)=><Link to={link.path} key={index} className="w-10 h-10 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">{link.icon}</Link>)}
            </div>
        </div>

        <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quiero: 
            </h2>
          <ul>
            {quickLink01.map((item, index)=>(
              <li key={index} className="mb-4">
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Apoyo: 
            </h2>
          <ul>
            {quickLink01.map((item, index)=>(
              <li key={index} className="mb-4">
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
          <ul>
            {quickLink01.map((item, index)=>(
              <li key={index} className="mb-4">
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </footer>
  )
}

export default Footer