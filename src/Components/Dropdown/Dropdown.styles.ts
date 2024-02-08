import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  border-radius: 3px;
  min-height: 40px;
  min-width: 80px;
  width: fit-content;
  height: fit-content;
  max-width: 250px;
  max-height: 390px;
  overflow-y: auto;
  z-index: 5;

  /* Conditional styles for list-dropdown and board-dropdown */
  &.list-dropdown, &.board-dropdown {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 10px;
    width: 150px !important;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }
  }
`;

export {
  StyledDropdown
};