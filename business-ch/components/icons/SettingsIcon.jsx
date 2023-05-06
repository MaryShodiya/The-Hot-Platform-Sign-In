import * as React from "react";

function SettingsIcon({ fill = "#465555", ...rest }) {
  return (
    <svg width={24} height={24} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" {...rest}>
      <path d="M56 32a23.74 23.74 0 0 0-.32-3.89L48 25.37 51.5 18a24.41 24.41 0 0 0-5.5-5.5L38.63 16l-2.74-7.68a23.8 23.8 0 0 0-7.78 0L25.37 16 18 12.5a24.41 24.41 0 0 0-5.5 5.5l3.5 7.37-7.68 2.74a23.8 23.8 0 0 0 0 7.78L16 38.63 12.5 46a24.41 24.41 0 0 0 5.5 5.5l7.37-3.5 2.74 7.68a23.8 23.8 0 0 0 7.78 0L38.63 48 46 51.5a24.41 24.41 0 0 0 5.5-5.5L48 38.63l7.68-2.74A23.74 23.74 0 0 0 56 32z"/>
      <circle cx="32" cy="32" r="4"/>
      </svg>
  );
}

export default SettingsIcon;