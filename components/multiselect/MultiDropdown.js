import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const MultiDropdown = ({
  children,
  ...props
}) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">
        {children}
      </div>
    </DropdownProvider>
  );
};

export default MultiDropdown;
