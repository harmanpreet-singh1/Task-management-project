import React, { useState } from "react";
import { X } from "react-feather";
import {
  CustomInputWrapper,
  CustomInputEditForm,
  CustomInputEditFooter,
  DisplayHtmlElement,
} from "./CustomInput.styles";
import useClickOutside from "../../Hooks/useClickOutside";

// Interface defining props for the CustomInput component
interface CustomInputProps {
  text: string; // Text to display when not in edit mode
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: string;
  resetVal?: boolean;
  EditHtmlElementName?: React.ElementType;
  DisplayHtmlElementName?: React.ElementType;
  showAddButton?: boolean;
}

// Functional component representing a customizable input field
function CustomInput(props: CustomInputProps) {
  const {
    text,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
    DisplayHtmlElementName = "p",
    EditHtmlElementName = "input",
    resetVal = false,
    showAddButton = true,
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const dropdownRef = useClickOutside(() => setIsCustomInput(false))
  const [inputText, setInputText] = useState(defaultValue || "");

  // Function triggered on form submission
  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      resetVal && setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  return (
    <CustomInputWrapper>
      {/* Displaying either edit mode or display mode based on state */}
      {isCustomInput ? (
        <CustomInputEditForm ref={dropdownRef} onSubmit={submission} className={editClass}>
          <EditHtmlElementName
            type="text"
            value={inputText}
            placeholder={placeholder || text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
            autoFocus
          />
          {/* Submit button and close icon */}
          {showAddButton && (
            <CustomInputEditFooter>
              <button type="submit">{buttonText || "Add"}</button>
              <X onClick={() => setIsCustomInput(false)} className="closeIcon" />
            </CustomInputEditFooter>
          )}
        </CustomInputEditForm>
      ) : (
        <DisplayHtmlElement>
          <DisplayHtmlElementName
            className={`custom-input-display ${displayClass ? displayClass : ""}`}
            onClick={() => setIsCustomInput(true)}
          >
            {text}
          </DisplayHtmlElementName>
        </DisplayHtmlElement>
      )}
    </CustomInputWrapper>
  );
}

export default CustomInput;