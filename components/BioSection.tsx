import React from "react";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function BioSection() {
  return (
    <div className="py-4">
      <AppInput label="Name" triggerChange={() => {}} type="text" />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
          defaultValue={""}
        />
      </div>

      <AppButton label="Update" triggerClick={() => {}} />
    </div>
  );
}

export default BioSection;
