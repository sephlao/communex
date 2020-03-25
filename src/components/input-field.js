import React from "react";
import SendIcon from '../img/icons/send.svg';

const InputField = () => {
    return <section className="input-field">
    <div className="text-input">
      <input type="text" className="input" placeholder="Aa"/>
      <button><SendIcon/></button>
    </div>
  </section>
  }

export default InputField;