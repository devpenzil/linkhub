import React from "react";
import { appInput } from "../types/components";

function AppInput({ label, triggerChange, type, loading, value }: appInput) {
  return (
    <div>
      <div className="form-control w-full py-2 ">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          placeholder=""
          className="input input-bordered w-full max-w-x"
          onChange={(e) => {
            triggerChange(e.target.value);
          }}
          value={value}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export default AppInput;
