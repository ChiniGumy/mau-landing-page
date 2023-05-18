function Navbar() {
  return (
    <nav className="bg-gray-footer h-14 fixed w-full flex justify-between items-center z-[100]">

        <div className="ml-16 max-sm:hidden">
            <h1 className="text-white-titles text-2xl font-bold">MC</h1>
        </div>

        <div className="mr-16 max-sm:mr-0 max-sm:flex max-sm:items-center text-center max-sm:justify-center max-sm:w-full">
            <a href='#Hero'className="text-white-titles mx-6 text-lg">Home</a>
            <a href='#Jobs'className="text-white-titles mx-6 text-lg">Jobs</a>
            <a href='#Biography'className="text-white-titles mx-6 text-lg">Me</a>
            <a href='#Packs'className="text-white-titles mx-6 text-lg">Packs</a>
        </div>
    </nav>
  )
}

export default Navbar