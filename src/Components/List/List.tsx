import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import CustomInput from "../CustomInput/CustomInput";
import { useAppState } from '../../Hooks/useAppState';

// Importing styled components as a single object
import * as Styled from "./List.styles";

import { IList } from "../../Interfaces";

// Interface defining props for the List component
interface ListProps {
  list: IList;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
}

// Functional component representing a list on the Trello board
function List(props: ListProps) {
  const {
    list,
    onDragEnd,
    onDragEnter,
  } = props;
  const { dispatch } = useAppState();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Styled.ListContainer>
      <Styled.ListInner key={list?.id}>
        <Styled.ListHeader>
          <Styled.ListHeaderTitle>
            {/* Input field for list title */}
            <Styled.ListHeaderTitleButton>
              <CustomInput
                defaultValue={list?.title}
                text={list?.title}
                placeholder={"Enter Title"}
                displayClass={"list-header-text"}
                DisplayHtmlElementName={"h2"}
                elementRole={"textbox"}
                onSubmit={(title) => dispatch({ type: 'UPDATE_LIST_TITLE', payload: {boardId: list?.id, title} })}
                showAddButton={false}
              />
            </Styled.ListHeaderTitleButton>
            {/* Displaying number of cards in the list */}
            <span className="list-card-number">{list?.cards?.length || 0}</span>
          </Styled.ListHeaderTitle>
          <Styled.ListHeaderTitleMore
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {/* Dropdown menu will be visible if the user clicks on the menu icon. This list for now contains only the delete list button. 
              But, more options can be added as per the requirement.
            */}
            {showDropdown && (
              <Dropdown
                class="list-dropdown"
                onClose={() => setShowDropdown(false)}
              >
                {/* Option to delete the list */}
                <Styled.ListDropdownItem onClick={() => dispatch({ type: 'REMOVE_LIST', payload: list?.id })}>Delete List</Styled.ListDropdownItem>
              </Dropdown>
            )}
          </Styled.ListHeaderTitleMore>
        </Styled.ListHeader>
        {/* Rendering cards in the list */}
        {list?.cards?.length ? (
          <Styled.ListCards className="custom-scroll">
            {list?.cards?.map((item) => (
              <Card
                key={item.id}
                card={item}
                boardId={list.id}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
              />
            ))}
          </Styled.ListCards>
        ) : null}
        <Styled.AddCardComponent>
          {/* Input field to add a new card */}
          <CustomInput
            text="+ Add Card"
            placeholder="Enter Card Title"
            displayClass="list-add-card"
            editClass="list-add-card-edit"
            resetVal={true}
            isInputElement={true}
            inputType={"button"}
            onSubmit={(value: string) => dispatch({ type: 'ADD_CARD', payload: {id: list?.id, value} })}
          />
        </Styled.AddCardComponent>
      </Styled.ListInner>
    </Styled.ListContainer>
  );
}

export default List;