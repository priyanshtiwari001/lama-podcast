export default function Banner() {
    return <div className="hidden lg:block w-[66%] bg-gradient-purple relative  text-white">
        <div className="absolute">
            <img src="/images/banner.svg" alt="banner" className="inset-0 z-0 object-cover" />
        </div>
        <div className="py-12 px-15">
            <img src="/images/logo.svg" alt="logo" />
            <div className="mt-13 flex flex-col gap-7">
                <h1 className="text-7xl font-montserrat font-light z-1 tracking-wide leading-20 font-circular  lg:w-[72%]">Your podcast will no longer be just a hobby.</h1>
                <p className=" max-w-4xl text-xl tracking-wider font-light w-[45%] font-poppins">Supercharge Your Distribution using our AI assistant!</p>
            </div>

        </div>
    </div>;
}