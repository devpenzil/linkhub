import React from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function LinkSection() {
  return (
    <div className="py-4">
      <div>
        <AppInput label="Email" triggerChange={() => {}} type="url" />
        <AppInput label="Whatsapp" triggerChange={() => {}} type="url" />
        <AppInput label="Instagram" triggerChange={() => {}} type="url" />
        <AppInput label="twitter" triggerChange={() => {}} type="url" />
        <AppInput label="Github" triggerChange={() => {}} type="url" />
        <AppInput label="Linkedin" triggerChange={() => {}} type="url" />
        <AppInput label="Facebook" triggerChange={() => {}} type="url" />
        <AppButton label="Save" triggerClick={() => {}} />
      </div>
    </div>
  );
}

export default LinkSection;
