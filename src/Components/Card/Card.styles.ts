import styled from "styled-components";

// Styled card component
const CardContainer = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 9px 12px, rgb(0 0 0 / 6%) 0px 6px 6px;
  cursor: pointer;
  &:hover {
    outline: 2px solid #388bff;
  }
  &:hover .card-top-more {
    opacity: 1;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CardTopLabels = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 14px;
  line-height: 21px;
  label {
    border-radius: 40px;
    padding: 4px 12px;
    background-color: gray;
    color: #fff;
    width: fit-content;
  }
`;

const CardTopMore = styled.div`
  width: 30px;
  height: 20px;
  transform: translateX(15px);
  flex: 1;
  cursor: pointer;
  opacity: 0;
  transition: 200ms;
`;

const CardTitle = styled.h3`
  flex: 1;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardFooterItem = styled.p`
  border-radius: 40px;
  padding: 4px 12px;
  background-color: #f8f8f8;
  color: #000;
  width: fit-content;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  gap: 5px;
  align-items: center;

  &.tasks-completed {
    background-color: #67e267;
  }
`;

const CardFooterIcon = styled.div`
  svg {
    height: 13px;
    width: 13px;
  }
`;

const CardFooterUser = styled.div`
  border-radius: 50%;
  height: 28px;
  width: 28px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export {
  CardContainer,
  CardTop,
  CardTopLabels,
  CardTopMore,
  CardTitle,
  CardFooter,
  CardFooterItem,
  CardFooterIcon,
  CardFooterUser,
}