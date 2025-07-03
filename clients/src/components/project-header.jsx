
export default function NavBar() {
  return <header className="flex justify-between items-center  px-12 pt-6">
    <div className="flex items-center space-x-2">
      <img src="/images/form-logo.svg" alt="Ques.AI Logo" className="w-9 h-9 lg:w-15 lg:h-15 " />
      <span className="tex-2xl lg:text-3xl font-bold text-purple-800">Ques.<span className="font-extralight text-2xl lg:text-3xl">AI</span></span>
    </div>

    <div className="flex items-center space-x-6">
      <button>
        <img src="/icons/settings.png" alt="Settings" className="w-7 h-7 lg:w-9 lg:h-9" />
      </button>
      <button>
        <img src="/icons/bell.png" alt="Notifications" className="w-7 h-7 lg:w-9 lg:h-9" />
      </button>
    </div>
  </header>;
}
