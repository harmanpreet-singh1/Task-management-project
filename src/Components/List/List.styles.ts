import styled from 'styled-components';

// Styled component for the list container
const ListContainer = styled.li`
  min-width: 280px;
  width: 280px;
  flex-basis: 290px;
  display: flex;
  flex-direction: column;
  color: #17394d;
`;

const ListInner = styled.div`
  background-color: rgb(223 227 230 / 55%);
  padding: 8px;
  border-radius: 5px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
`;

const ListHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  gap: 5px;
  align-items: center;

  .list-card-number {
    color: #000;
    font-size: 1.2rem;
  }
`;

const ListHeaderTitleButton = styled.div`
  .list-header-text {
    padding: 6px 12px;
    background-color: transparent;
    font-size: 1.2rem;
    &:hover {
      background-color: #ddd;
    }
  }
`;

const ListHeaderTitleMore = styled.div`
  cursor: pointer;
  position: relative;
`;

const ListDropdownItem = styled.p`
  border-bottom: 1px solid #f8f8f8;
  cursor: pointer;
`;

const ListCards = styled.ul`
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;

const AddCardComponent = styled.div`
  .list-add-card {
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
`;

export {
  ListContainer,
  ListInner,
  ListHeader,
  ListHeaderTitle,
  ListHeaderTitleButton,
  ListHeaderTitleMore,
  ListDropdownItem,
  ListCards,
  AddCardComponent,
};
