import styled from 'styled-components';
import backgroundImgURL from '../../Assets/images/background.jpg';

// Background image for body
const Dashboard = styled.div`
  background-image: url(${backgroundImgURL});
  background-size: cover;
`;

const DashboardHeading = styled.h1`
  display: inline-block;
  margin-left: 10px;
`;

// Styling for app container
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Styling for app navigation
const AppNav = styled.header`
  padding: 5px 0px;
  box-shadow: 0 1px 20px rgba(56, 40, 40, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  box-shadow: none;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  line-height: 36px;
  padding: 12px;
  text-align: center;
  background-color: rgb(46, 126, 175);
`;

// Styling for app boards container
const AppBoardsContainer = styled.main`
  flex: 1;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  height: 100%;
  padding: 20px;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(217 215 215);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(179, 174, 174, 0.5);
  }
`;

// Styling for app boards
const AppBoards = styled.ul`
  width: fit-content;
  padding: 0px 30px;
  display: inline-flex;
  gap: 12px;
  height: 100%;
`;

// Styling for last board
const AppBoardsLast = styled.div`
  flex-basis: 280px;
  min-width: 280px;
  .app-boards-add-board {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
    width: 100%;
    text-align: center;
    padding: 10px 12px;
    font: inherit;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #ddd;
    }
  }
  .app-boards-add-board-edit {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
`;

export {
  Dashboard,
  DashboardHeading,
  AppContainer,
  AppNav,
  AppBoardsContainer,
  AppBoards,
  AppBoardsLast,
};
