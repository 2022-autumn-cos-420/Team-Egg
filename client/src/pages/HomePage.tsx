import React from "react";
import { Button } from "react-bootstrap";

function HelpPage(): JSX.Element{
  return<div /*this is a function that hides a small page unless the user clicks the need help button*/>

  </div>
}


function HelpButton(): JSX.Element {
  return <div className="cursor-pointer">
    <div className="bg-white text-center py-4 lg:px-4 absolute bottom-0 left-0">
    <div className="p-2 bg-crt_BB_darkBlue items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
      <span className="text-lg flex rounded-full bg-crt_BB_lightBlue uppercase px-3.5 py-1 text-L font-bold mr-3">?</span>
      <span className="font-semibold mr-2 text-left flex-auto">Need help?</span>
    </div>
    </div>
  </div>
}

function WelcomeMessage(): JSX.Element{
  return <div>
    <div className="text-4xl text-center absolute inset-80 font-bold font-sans" data-testid="welcomeMessage" >Hope your day is as bright as your future!</div>
</div>
}

function SearchBar(): JSX.Element{
  return <div>
    <div className="pt-2 relative mx-auto text-gray-600 absolute inset-80 left-0">
      <input className="border-2 border-crt_BB_black bg-crt_BB_white h-10 px-5 pr-20 rounded-lg text-sm focus:outline-none"
            placeholder="Enter University here"/>
      <button type="submit" className="relative right-[59px] top-[1px] mt-5 mr-4 bg-crt_BB_lightBlue rounded-md p-1 text-black">
       Search</button>
      </div>
</div>
}




function HomePage(): JSX.Element {
    return <div>
        <HelpButton></HelpButton>
        <WelcomeMessage></WelcomeMessage>
        <SearchBar></SearchBar>



    </div>
}

export default HomePage;