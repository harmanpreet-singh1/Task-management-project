import { useEffect, useRef } from "react";

import { StyledDropdown } from "./Dropdown.styles";

// Dropdown component for showing the available options to the user.
function Dropdown(props: any) {

  // Function to handle clicks outside the dropdown to close it
  const handleClick = (event: any) => {
  };

  // Rendering the dropdown component
  return (
    <div className="Dropdown" onClick={handleClick}></div>
  );
}

export default Dropdown;
