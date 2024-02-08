import styled from "styled-components";

const CardInfoContainer = styled.div`
  padding: 30px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 750px;
  max-height: 700px;
`;

const CardInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .card-description {
    width: 100%;
    min-height: 6rem;
    font-size: 0.875rem;
    margin-bottom: 5px;
    background-color: #eee;
    padding: 10px;
    &:hover {
      background-color: #d9d4d496;
    }
  }
`;

const CardInfoBoxTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 1.2rem;
    width: fit-content;
    &:hover {
      background-color: #ddd;
    }
  }

  svg {
    height: 18px;
    width: 18px;
  }
`;

const CardInfoBoxLabels = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  label {
    border-radius: 40px;
    background-color: gray;
    color: #fff;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }
`;

const CardInfoBoxUl = styled.ul`
  display: flex;
  gap: 15px;
  margin-left: 20px;

  li {
    list-style: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }

  .li-active {
    box-shadow: 0 0 0 3px yellow; 
    border: 2px solid red;
    padding: 8px;
  }
`;

const CardInfoBoxProgressBar = styled.div`
  width: 100%;
  border-radius: 30px;
  height: 10px;
  border: 1px solid #ccc;
`;

const CardInfoBoxProgress = styled.div`
  height: 100%;
  border-radius: 30px;
  background-color: skyblue;
  width: 0;
  transition: 200ms;
`;

const CardInfoBoxTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardInfoBoxTaskCheckbox = styled.div`
  display: flex;
  gap: 10px;

  input, svg {
    height: 18px;
    width: 18px;
    outline: none;
    cursor: pointer;
  }

  p {
    flex: 1;
    line-height: 18px;
  }

  .completed {
    text-decoration-line: line-through;
  }
`;

const CardInfoBoxInputDate = styled.input`
  width: fit-content;
  border: 2px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  padding: 10px;
`;

const CardInfoTaskAddButton = styled.div`
  .card-modal-task-add-button, .card-modal-task-add-button-edit {
    margin-bottom: 30px;
  }
`;

const CardInfoCustomAddButton = styled.div`
  .card-modal-label-button, .card-modal-task-add-button {
    background-color: #0079bf;
    border: none;
    width: 100px;
    box-shadow: none;
    color: var(--ds-text-inverse, #fff);
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-size: inherit;
    &:hover {
      background-color: #046daa;
    }
  }
`;

export {
  CardInfoContainer,
  CardInfoBox,
  CardInfoBoxTitle,
  CardInfoBoxLabels,
  CardInfoBoxUl,
  CardInfoBoxTaskList,
  CardInfoBoxTaskCheckbox,
  CardInfoBoxProgressBar,
  CardInfoBoxProgress,
  CardInfoBoxInputDate,
  CardInfoTaskAddButton,
  CardInfoCustomAddButton,
};
