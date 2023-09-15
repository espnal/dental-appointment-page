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
            <h2 className="heading mb-5 pl-[60px] text-left">Mas acerca de mi</h2>
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

        <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor fonr-semibold">
            Educacion
          </h3>
          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  23 Junio, 2008
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  PHD in UCE
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  Lo que sea over ofa-flip-vertical
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Doctor
