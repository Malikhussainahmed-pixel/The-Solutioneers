

export default function Navbar() {
  return (
    <div  className="flex justify-center mt-8">
    <div className="font-bold  bg-white inline-flex gap-3   p-3 sm:gap-4   sm:p-3  rounded-full shadow-xl text-center">
        <div className="hover:bg-orange-400 text-orange-400 hover:text-white p-2 text-md sm:text-lg sm:p-2  rounded-4xl sm:w-28 transition-colors duration-300 ease-in-out">Services</div>
        <div className="hover:bg-orange-400 text-orange-400 hover:text-white p-2 text-md sm:text-lg sm:p-2 rounded-4xl sm:w-28 transition-colors duration-300 ease-in-out">Projects</div>
        <div className="hover:bg-orange-400 text-orange-400 hover:text-white p-2 text-md sm:text-lg sm:p-2 rounded-4xl sm:w-28 transition-colors duration-300 ease-in-out">Clients</div>
        <div className="hover:bg-orange-400 text-orange-400 hover:text-white p-2 text-md sm:text-lg sm:p-2 rounded-4xl sm:w-28 transition-colors duration-300 ease-in-out">About us</div>
        <div className="sm:block hidden text-md sm:text-lg hover:bg-orange-400 text-orange-400 hover:text-white  sm:p-2 rounded-4xl sm:w-28 transition-colors duration-300 ease-in-out"> Contact Us</div>
    </div>
    </div>
  )
}
