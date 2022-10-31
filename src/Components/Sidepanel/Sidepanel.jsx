import React from 'react'
import Social from "../Widgets/Social/Social";
import SwitchLang from "../Widgets/SwitchLang/SwitchLang";

const Sidepanel = () => {
  return (
    <div className="sidepanel">
        <Social />
        <div className='header-text header-text_17px'>CONTACT US</div>
        <SwitchLang />
      </div>
  )
}

export default Sidepanel