import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";

import Logo from "../../../public/nexus-logo.png"
import FooterLine from "../../../public/footer-line.png"

export const Footer = () => {
    return (
        <footer >
          <div className="flex flex-row xs:flex-col md:flex-row justify-between px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="flex flex-col justify-between gap-8">
              <p className="text-xl text-center font-semibold ">
                Want to know more? <br/>
                <b>Let&apos;s <i>get in touch</i></b>
              </p>
              <form className="w-full max-w-sm xs:mb-5">
                <div className="flex flex-col w-full lg:flex-row">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input name="email" id="email-address" type="email" placeholder="Email address" className="rounded-sm block w-full h-12 px-4 py-2 duration-200 border text-white bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" />
                  <button type="submit" aria-label="Primary action" className="rounded-sm inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-green-500 md:w-auto hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h3 className="text-base text-white font-semibold"><i>Company</i></h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="https://twitter.com/lexingtonthemes" className="hover:underline">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline">
                    CAREERS
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline">
                    TERMS & CONDITIONS
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mt-[-19px]">
              <h3 className="text-base text-white font-semibold xs:mt-5"><i>Product</i></h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="https://lexingtonthemes.com/" className="hover:underline">
                    PRICING
                  </a>
                </li>
                <li>
                  <a href="https://lexingtonthemes.com/" className="hover:underline">
                    TALENT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col mt-12 md:flex-row md:items-center md:justify-between bg-white px-8 py-12 mx-auto md:px-12 lg:px-32">
            <div className="xs:text-center xs:pl-32 md:pl-0 lg:pl-0 xl:pl-32">
              <Image alt="Nexus Logo" width={80} height={80} src={Logo} />
            </div>
            <ul className="mt-8 flex justify-center gap-2 sm:mt-0 lg:justify-center text-black xs:mb-7 md:mb-0 xl:pl-28">
              <li><FaInstagram /></li>
              <li><BsLinkedin /></li>
              <li><BiLogoTelegram /></li>
            </ul>
            <div className="flex flex-row gap-2 text-gray-800 xs:m-auto md:m-0">
              <button className="text-sm font-medium text-balance">
                BACK TO TOP 
              </button>
              <FaArrowUp />
            </div> 
          </div>
          <div className="bg-[url('/faq-bg.png')] h-[10px]"></div>
      </footer>
    )
}

export default Footer;