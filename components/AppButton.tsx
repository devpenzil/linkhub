import React from "react";
import { appButton } from "../types/components";

function AppButton({ label, triggerClick, loading }: appButton) {
  return (
    <div className="py-4">
      <button
        className={"btn btn-primary w-full " + (loading && " loading")}
        onClick={triggerClick}
      >
        {label}
      </button>
    </div>
  );
}

export default AppButton;
