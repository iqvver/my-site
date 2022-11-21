import React from 'react'
import Social from "../Widgets/Social/Social";
import SwitchTheme from "../Widgets/SwitchTheme/SwitchTheme";

const Sidepanel = ({switchTheme, setSwitchTheme}) => {
  return (
    <div className="sidepanel">
        <Social />
        <SwitchTheme switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
      </div>
  )
}

export default Sidepanel