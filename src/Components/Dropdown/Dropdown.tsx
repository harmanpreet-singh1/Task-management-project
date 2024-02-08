import React, { useEffect, useRef } from "react";

import { StyledDropdown } from "./Dropdown.styles";

// Dropdown component for showing the available options to the user.
function Dropdown(props: any) {
  const dropdownRef: any = useRef();

  // Function to handle clicks outside the dropdown to close it
  const handleClick = (event: any) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  };

  // Effect to add and remove click event listener on mount and unmount respectively
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  // Rendering the dropdown component
  return (
    <StyledDropdown
      ref={dropdownRef}
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </StyledDropdown>
  );
}

export default Dropdown;
