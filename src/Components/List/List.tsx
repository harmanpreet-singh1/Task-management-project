import { useState } from "react";
import { MoreHorizontal } from "react-feather";
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
            {/* Some custom component */}
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
            
          </Styled.ListHeaderTitleMore>
        </Styled.ListHeader>
        {/* Rendering cards in the list */}
        {list?.cards?.length ? (
          <Styled.ListCards className="custom-scroll">
            {/* card compoennt */}
          </Styled.ListCards>
        ) : null}
        <div>
          {/* Input field to add a new card */}
        </div>
      </Styled.ListInner>
    </Styled.ListContainer>
  );
}

export default List;