import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash } from "react-feather";
import * as Styled from "./CardInfo.styles";
import { useAppState } from '../../../Hooks/useAppState';
import { colorsList } from "../../../Helper/Util";
import Modal from "../../Modal/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import { ICard, ILabel, ITask } from "../../../Interfaces";
import Chip from "../../Common/Chip";

// Interface defining props for the CardInfo component
interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
}

/**
 * Functional component representing card details modal which will open when the user clicks on any available or listed card.
 * @param props<CardInfoProps>
 */
function CardInfo(props: CardInfoProps) {
  const { dispatch } = useAppState();
  const { onClose, card, boardId } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<ICard>({
    ...card,
  });

  // Function to update card title
  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  // Function to update card description
  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  // Function to add label to the card
  const addLabel = (label: ILabel) => {
    const index = cardValues.labels.findIndex(
      (item) => item.text === label.text,
    );
    if (index > -1) return; //if label text already exist then return

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  // Function to remove label from the card
  const removeLabel = (label: ILabel) => {
    const tempLabels = cardValues.labels.filter(
      (item) => item.text !== label.text,
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  // Function to add task to the card
  const addTask = (value: string) => {
    const task: ITask = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues({
      ...cardValues,
      tasks: [...cardValues.tasks, task],
    });
  };

  // Function to remove task from the card
  const removeTask = (id: number) => {
    const tasks = [...cardValues.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues({
      ...cardValues,
      tasks: tempTasks,
    });
  };

  // Function to update task completion status
  const updateTask = (id: number, value: boolean) => {
    const tasks = [...cardValues.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = Boolean(value);

    setCardValues({
      ...cardValues,
      tasks,
    });
  };

  // Function to calculate task completion percentage
  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item) => item.completed,
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const updateDate = (date: string) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  useEffect(() => {
    dispatch({type: "UPDATE_CARD", payload: {boardId, cardId: cardValues.id, cardValues}})
  }, [cardValues]);

  const calculatedPercent = calculatePercent();

  return (
    // Card details modal
    <Modal onClose={onClose}>
      <Styled.CardInfoContainer>
        {/* Title input */}
        <Styled.CardInfoBox>
          <Styled.CardInfoBoxTitle>
            <CustomInput
              defaultValue={cardValues.title}
              text={cardValues.title}
              DisplayHtmlElementName={"h2"}
              placeholder="Enter Title"
              showAddButton={false}
              onSubmit={updateTitle}
            />
          </Styled.CardInfoBoxTitle>
        </Styled.CardInfoBox>

        {/* Description input */}
        <Styled.CardInfoBox>
          <Styled.CardInfoBoxTitle>
            <List />
            <h3>Description</h3>
          </Styled.CardInfoBoxTitle>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Description"}
            displayClass="card-description"
            placeholder="Enter description"
            EditHtmlElementName={"textarea"}
            onSubmit={updateDesc}
          />
        </Styled.CardInfoBox>

        {/* Date input */}
        <Styled.CardInfoBox>
          <Styled.CardInfoBoxTitle>
            <Calendar />
            <h3>Date</h3>
          </Styled.CardInfoBoxTitle>
          <Styled.CardInfoBoxInputDate
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </Styled.CardInfoBox>

        {/* Labels section */}
        <Styled.CardInfoBox>
          <Styled.CardInfoBoxTitle>
            <Tag />
            <h3>Labels</h3>
          </Styled.CardInfoBoxTitle>
          <Styled.CardInfoBoxLabels>
            {/* Displaying labels */}
            {cardValues.labels?.map((item, index) => (
              <Chip key={index} item={item} removeLabel={removeLabel} />
            ))}
          </Styled.CardInfoBoxLabels>
          {/* Color selection */}
          <Styled.CardInfoBoxUl>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </Styled.CardInfoBoxUl>
          {/* Input to add new label */}
          <Styled.CardInfoCustomAddButton>
            <CustomInput
              text="Add Label"
              placeholder="Enter label text"
              displayClass={"card-modal-label-button"}
              resetVal={true}
              isInputElement={true}
              inputType={"button"}
              onSubmit={(value: string) =>
                addLabel({ color: selectedColor, text: value })
              }
            />
          </Styled.CardInfoCustomAddButton>
        </Styled.CardInfoBox>

        {/* Tasks section */}
        <Styled.CardInfoBox>
          <Styled.CardInfoBoxTitle>
            <CheckSquare />
            <h3>Tasks</h3>
          </Styled.CardInfoBoxTitle>
          {/* Progress bar */}
          {cardValues.tasks.length ? <Styled.CardInfoBoxProgressBar>
            <Styled.CardInfoBoxProgress
              style={{
                width: `${calculatedPercent}%`,
                backgroundColor: calculatedPercent === 100 ? "limegreen" : "",
              }}
            />
          </Styled.CardInfoBoxProgressBar> : null}
          {/* Task list */}
          <Styled.CardInfoBoxTaskList>
            {cardValues.tasks?.map((item) => (
              <Styled.CardInfoBoxTaskCheckbox key={item.id}>
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </Styled.CardInfoBoxTaskCheckbox>
            ))}
          </Styled.CardInfoBoxTaskList>
          {/* Input to add new task */}
          <Styled.CardInfoCustomAddButton>
            <Styled.CardInfoTaskAddButton>
              <CustomInput
                text={"Add a Task"}
                placeholder="Enter task"
                displayClass={"card-modal-task-add-button"}
                editClass={"card-modal-task-add-button-edit"}
                resetVal={true}
                isInputElement={true}
                inputType={"button"}
                onSubmit={addTask}
              />
            </Styled.CardInfoTaskAddButton>
          </Styled.CardInfoCustomAddButton>
        </Styled.CardInfoBox>
      </Styled.CardInfoContainer>
    </Modal>
  );
}

export default CardInfo;