import { useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { useAppState } from '../../Hooks/useAppState';
import { formatDate } from "../../Helper/Util";
import * as Styled from "./Card.styles";
import { ICard } from "../../Interfaces";
import Chip from "../Common/Chip";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo/CardInfo";

// Interface defining props for the Card component
interface CardProps {
  card: ICard;
  boardId: number;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
}

/**
 * Functional component representing a card which is getting used in the List component.
 * This component has the ability to drag and drop in any of the visible list.
 * @param props
 */
function Card(props: CardProps) {
  const { dispatch } = useAppState(); // Accessing state and dispatch function from custom hook

  const { card, boardId, onDragEnd, onDragEnter } = props;
  const { id, title, desc, date, tasks, labels } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Rendering CardInfo modal if showModal state is true */}
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
        />
      )}
      <Styled.CardContainer
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <Styled.CardTop>
          <Styled.CardTopLabels>
            {labels?.map((item, index) => (
              <Chip key={index} item={item} />
            ))}
          </Styled.CardTopLabels>
          <Styled.CardTopMore
            className="card-top-more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {/* Dropdown menu will be visible if the user clicks on the menu icon. This list for now contains only the delete card button. 
              But, more options can be added as per the requirement.
            */}
            {showDropdown && (
              <Dropdown
                class="board-dropdown"
                onClose={() => setShowDropdown(false)}
              >
                {/* Option to delete the card */}
                <p onClick={() => dispatch({type: "REMOVE_CARD", payload: {boardId, cardId: id}})}>Delete Card</p>
              </Dropdown>
            )}
          </Styled.CardTopMore>
        </Styled.CardTop>
        {/* Card title */}
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <div>
          {/* Card description */}
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        {/* Card footer */}
        <Styled.CardFooter>
          {/* Displaying card date if available */}
          {date && (
            <Styled.CardFooterItem>
              <Styled.CardFooterIcon>
                <Clock />
              </Styled.CardFooterIcon>
              {formatDate(date)}
            </Styled.CardFooterItem>
          )}
          {/* Displaying tasks completion status if tasks are available */}
          {tasks && tasks?.length > 0 && (
            <Styled.CardFooterItem className={tasks?.filter((item) => item.completed)?.length === tasks?.length ? 'tasks-completed' : ''}>
              <Styled.CardFooterIcon><CheckSquare /></Styled.CardFooterIcon>
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </Styled.CardFooterItem>
          )}
        </Styled.CardFooter>
      </Styled.CardContainer>
    </>
  );
}

export default Card;