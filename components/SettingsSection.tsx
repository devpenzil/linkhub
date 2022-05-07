/* eslint-disable react/no-unescaped-entities */
import React from "react";

function SettingsSection() {
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">All time data</div>
        </div>
      </div>
      <div className="mt-6 text-2xl font-semibold text-red-600">
        Delete Your Account
      </div>
      <p className="mt-2">
        Once you delete your account you can't undo that process
      </p>
      <button className="btn btn-error mt-4">Delete </button>
    </div>
  );
}

export default SettingsSection;
