import styled from 'styled-components';

const CustomInputWrapper = styled.div`
  width: 100%;
`;

const CustomInputEditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  textarea {
    max-width: 100%;
    width: 100%;
    margin: 0px 0px 0.5rem;
    padding: 0.5rem;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    color: rgb(64, 66, 75);
    line-height: 2rem;
    letter-spacing: 0.5px;
    border-radius: 0.2rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px;
    resize: none;
  }

  input {
    border: 2px solid #0079bf;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    padding: 10px;
  }
`;

const CustomInputEditFooter = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    background-color: #0079bf;
    color: #fff;
    border: none;
    transition: 100ms ease;
    padding: 10px;

    &:hover {
      background-color: #046daa;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  svg {
    cursor: pointer;
    height: 24px;
    width: 24px;
  }
`;

const DisplayHtmlElement = styled.div`
  border-radius: 3px;
  color: #000;
  cursor: pointer;
  transition: 200ms;

  h2 {
    padding: 6px 12px;
    background-color: transparent;
    font-size: 1.2rem;
  }

  .list-add-card {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
    width: 100%;
    text-align: center;
    padding: 6px 12px;
    &:hover {
      background-color: #ddd;
    }
  }

  .card-description {
    width: 100%;
    min-height: 5rem;
    font-size: 0.875rem;
    margin-bottom: 5px;
    background-color: #eee;
    padding: 10px;
  }

  .app-boards-add-board {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
    width: 100%;
    text-align: center;
    padding: 6px 12px;
  }

  .app-boards-add-board-edit {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }

  .card-modal-task-section {
    background-color: #0079bf;
    border: none;
    width: 100px;
    box-shadow: none;
    color: var(--ds-text-inverse, #fff);
    padding: 3px 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    &:hover {
      background-color: #046daa;
    }
  }
`;


export {
  CustomInputWrapper,
  CustomInputEditForm,
  CustomInputEditFooter,
  DisplayHtmlElement,
}