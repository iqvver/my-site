import React from 'react'
import Social from "../Widgets/Social/Social";
import SwitchLang from "../Widgets/SwitchLang/SwitchLang";
import ContactForm from "../Widgets/СontactForm/ContactForm";

const Sidepanel = () => {
  return (
    <div className="sidepanel">
        <Social />
        <ContactForm />
        <SwitchLang />
      </div>
  )
}

export default Sidepanel