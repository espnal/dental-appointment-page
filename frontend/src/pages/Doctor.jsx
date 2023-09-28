// import DoctorCard from ''
import chey from '../assets/images/chey.jpg'
const Doctor = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="lg:flex flex-row ms:flex-col-reverse ">
          <div className="w-auto mb-5 lg:ml-[70px] ms:ml-auto flex justify-center">
            <img className="rounded-2xl" src={chey} alt="chey"/>
          </div>
          <div className="lg:w-1/2 ms:w-auto">
            <h2 className="heading mb-5 pl-[60px] text-left">Acerca de <span className="text-irisBlueColor">Cheylin Peña</span></h2>
            <p className="mr-[70px] pl-[60px] text-[16px] leading-9 text-justify font-[400] text-textColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea cum officia suscipit! Ipsa praesentium quisquam quasi 
              sequi vel est dignissimos eveniet, maiores nam, aut molestiae 
              deleniti. Ab cum hic aperiam.Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ea cum officia suscipit! Ipsa praesentium 
              quisquam quasi sequi vel est dignissimos eveniet, maiores 
              nam, aut molestiae deleniti. Ab cum hic aperiam.Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Ea cum officia 
              suscipit! Ipsa praesentium quisquam quasi sequi vel est 
              dignissimos eveniet, maiores nam, aut molestiae deleniti. 
              Ab cum hic aperiam.Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ea cum officia suscipit! Ipsa praesentium 
              quisquam quasi sequi vel est dignissimos eveniet, maiores nam, 
              aut molestiae deleniti. Ab cum hic aperiam.
              </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col mx-[75px]">
          <h2 className="heading leading-[30px] flex justify-start text-headingColor font-semibold float-left">
            Educacion
          </h2>
          <ul className="w-1/2 p-4 md:p-5">
            <li className="sm:flex-row md:gap-5 mb-[30px]">
              <div>
                <span className="flex justify-start text-irisBlueColor text-[15px] leading-6 font-semibold">
                  23 Junio, 2008
                </span>
                <div className="flex flex-row justify-between w-full">
                  <p className="text-[18px] leading-6 font-medium text-textColor">
                    PHD En odontologia
                  </p>
                  <p className="text-[18px] leading-5 font-medium text-textColor">
                    Universidad Central Del Este
                  </p>
                </div>
              </div>
            </li>

            <li className="sm:flex-row md:gap-5 mb-[30px]">
              <div>
                <span className="flex justify-start text-irisBlueColor text-[15px] leading-6 font-semibold">
                  23 Junio, 2008
                </span>
                <div className="flex flex-row justify-between w-full">
                  <p className="text-[18px] leading-6 font-medium text-textColor">
                    PHD En odontologia
                  </p>
                  <p className="text-[18px] leading-5 font-medium text-textColor">
                    Universidad Central Del Este
                  </p>
                </div>
              </div>
            </li>

            <li className="sm:flex-row md:gap-5 mb-[30px]">
              <div>
                <span className="flex justify-start text-irisBlueColor text-[15px] leading-6 font-semibold">
                  23 Junio, 2008
                </span>
                <div className="flex flex-row justify-between w-full">
                  <p className="text-[18px] leading-6 font-medium text-textColor">
                    PHD En odontologia
                  </p>
                  <p className="text-[18px] leading-5 font-medium text-textColor">
                    Universidad Central Del Este
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Doctor
