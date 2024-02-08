import { useEffect, useState } from "react";
import { Clipboard } from "react-feather";
import { useAppState } from '../../Hooks/useAppState';
import * as Styled from "./Dashboard.styles"; // Importing all styled components using *
import { getUpdatedListWithDragEvent } from "../../Helper/Util";
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
            {/* List Component */}
            <Styled.AppBoardsLast>
              {/* Button Or some custom component */}
            </Styled.AppBoardsLast>
          </Styled.AppBoards>
        </Styled.AppBoardsContainer>
      </Styled.AppContainer>
    </Styled.Dashboard>
  );
}

export default Dashboard;
