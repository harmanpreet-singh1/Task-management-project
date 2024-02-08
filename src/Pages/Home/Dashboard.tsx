import { useEffect, useState } from "react";
import { Clipboard } from "react-feather";
import List from "../../Components/List/List";
import { useAppState } from '../../Hooks/useAppState';
import * as Styled from "./Dashboard.styles"; // Importing all styled components using *
import { getUpdatedListWithDragEvent } from "../../Helper/Util";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { IList } from "../../Interfaces";
import { fetchBoardList, updateLocalStorageBoards } from "../../Helper/APILayer";

/**
 * This is the main page which shows all the lists on the dashboard and we can add, edit, remove, and update the 
 * cards as needed.
 * @returns the whole dashboard
 */
function Dashboard() {
  // Used hook to get the state and the dispatch method which can be used for updating the state.
  const { state, dispatch } = useAppState();
  const boardLists: IList[] = state?.lists;

  /**
  * Fetch the initial data from the server or in our case the initial data is saved locally for the demo.
  */
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const lists: IList[] = await fetchBoardList();
    dispatch({ type: 'FETCH_DATA', payload: lists });
  }

  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  // Calculate the final list data and dispatch the new list to update the view on the UI.
  const onDragEnd = (boardId: number, cardId: number) => {
    const tempBoardsList = getUpdatedListWithDragEvent({boardLists, boardId, cardId, targetCard});
    dispatch({ type: 'UPDATE_LIST_DATA', payload: tempBoardsList })
    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  /**
  * Update the localStorage with the latest data we have after the user actions.
  */
  useEffect(() => {
    updateLocalStorageBoards(boardLists);
  }, [boardLists]);

  return (
    <Styled.Dashboard>
      <Styled.AppContainer>
        <Styled.AppNav>
          <Clipboard />
          <Styled.DashboardHeading>Trello Board</Styled.DashboardHeading>
        </Styled.AppNav>
        <Styled.AppBoardsContainer>
          <Styled.AppBoards>
            {boardLists.map((item) => (
              <List
                key={item.id}
                list={item}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
              />
            ))}
            <Styled.AppBoardsLast>
              <CustomInput
                displayClass="app-boards-add-board"
                editClass="app-boards-add-board-edit"
                placeholder="Enter Board Name"
                text="Add Board"
                buttonText="Add Board"
                resetVal={true}
                onSubmit={(name) => dispatch({ type: 'ADD_LIST', payload: name })}
              />
            </Styled.AppBoardsLast>
          </Styled.AppBoards>
        </Styled.AppBoardsContainer>
      </Styled.AppContainer>
    </Styled.Dashboard>
  );
}

export default Dashboard;
