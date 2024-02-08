import { AppStateData, IList } from "../Interfaces";

type Reducer = (state: AppStateData, action: any) => AppStateData; // Defining the Reducer type

// Define initial state
export const initialState: AppStateData = { lists: [] };

// Reducer function to manage application state
export const appStateReducer: Reducer = (state, action) => {
  switch (action.type) {
    // Case for fetching data
    case "FETCH_DATA": {
      return {
        ...state,
        lists: action?.payload
      };
    }
    // Case for adding a new list
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: Date.now() + Math.random() * 2, // Generate a unique ID for the new list
            title: action.payload,
            cards: [],
          }
        ]
      };
    }

    // Case for removing a list
    case "REMOVE_LIST": {
      // Find the index of the list to remove
      const boardIndex = state?.lists.findIndex((item: IList) => item.id === action?.payload);
      const tempBoardsList = [...state.lists];
      tempBoardsList.splice(boardIndex, 1);
      return {
        ...state,
        lists: tempBoardsList // Update the lists array
      };
    }

    // Case for updating the title of a list
    case "UPDATE_LIST_TITLE": {
      const { payload: { boardId, title }} = action;
       // Find the index of the list to update
      const boardIndex = state?.lists.findIndex((item: IList) => item.id === boardId);
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, boardIndex), // Spread lists before the modified list
          {
            ...state.lists[boardIndex], // Spread the modified list
            title, // Update the title of the list
          },
          ...state.lists.slice(boardIndex + 1) // Spread lists after the modified list
        ]
      };
    }

    // Case for updating all list data
    case "UPDATE_LIST_DATA": {
      return {
        ...state,
        lists: action?.payload // Update lists with new data
      };
    }

    // Case for adding a new card to a list
    case "ADD_CARD": {
      const { payload: { id, value }} = action;
      const boardIndex = state?.lists.findIndex((item: IList) => item.id === id); // Find the index of the list to add the card to
      const updatedCards = [
        ...state.lists[boardIndex].cards, // Spread existing cards
        {
          id: Date.now() + Math.random() * 2, // Generate a unique ID for the new card
          title: value,
          labels: [],
          date: "",
          tasks: [],
          desc: "",
        }
      ];
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, boardIndex), // Spread lists before the modified list
          {
            ...state.lists[boardIndex], // Spread the modified list
            cards: updatedCards // Update cards array with the new array of cards
          },
          ...state.lists.slice(boardIndex + 1) // Spread lists after the modified list
        ]
      };
    }

    // Case for removing a card from a list
    case "REMOVE_CARD": {
      const { payload: { boardId, cardId }} = action;
      const boardIndex = state?.lists.findIndex((item: IList) => item.id === boardId); // Find the index of the list containing the card
      const cardIndex = state?.lists[boardIndex].cards.findIndex((item) => item.id === cardId); // Find the index of the card to remove
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, boardIndex), // Spread lists before the modified list
          {
            ...state.lists[boardIndex], // Spread the modified list
            cards: state.lists[boardIndex].cards.filter((_, index) => index !== cardIndex) // Remove the card at the found index
          },
          ...state.lists.slice(boardIndex + 1) // Spread lists after the modified list
        ]
      };
    }
    
    // Case for updating card data
    case "UPDATE_CARD": {
      const { payload: { boardId, cardId, cardValues }} = action;
      const boardIndex = state?.lists.findIndex((item: IList) => item.id === boardId); // Find the index of the list containing the card
      const cardIndex = state?.lists[boardIndex].cards.findIndex((item) => item.id === cardId); // Find the index of the card to update

      const tempBoardsList = [...state.lists]; // Create a copy of the lists array
      // If the card index is not found, return the current state
      if (cardIndex < 0) return state;

      tempBoardsList[boardIndex].cards[cardIndex] = cardValues; // Update the card data at the found index

      return {
        ...state,
        lists: tempBoardsList, // Update the lists array with the modified list
      };
    }
    // Default case
    default:
      return state;
  }
};
