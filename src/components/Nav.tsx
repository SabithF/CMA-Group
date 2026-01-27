import React from "react";


const Nav: React.FC = () => {
    return (
        <nav className="bg-[#FD7D00]">
            <div className="flex justify-between 
            items-center  pr-6">
                <div className="pb-3 ">
                    <div className="w-[350px]  bg-white -skew-x-12 origin-top-right">
                        <img src="/assets/logo/cam-logo.png"
                            alt="logo" className="w-72 h-auto object-contain translate-x-8 skew-x-12" />
                    </div>

                </div>

               

            </div>
        </nav>
    )
}

export default Nav;