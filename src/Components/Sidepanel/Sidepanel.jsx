import React from 'react'
import Social from "../Widgets/Social/Social";
import SwitchLang from "../Widgets/SwitchLang/SwitchLang";

const Sidepanel = ({switchTheme, setSwitchTheme}) => {
  return (
    <div className="sidepanel">
        <Social />
        <SwitchLang switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
      </div>
  )
}

export default Sidepanel