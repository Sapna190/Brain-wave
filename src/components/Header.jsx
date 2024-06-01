import { brainwave } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm 
    border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
    <div className="flex intems-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
     <a className="block w-[12rem] xl:mr-8" href="#hero">
        <image src={brainwave} width={190} height={40} /> 
     </a>
    </div>
  )
}

export default Header;
