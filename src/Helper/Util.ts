import { IList, DragEventData } from "../Interfaces";

export const formatDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  return day + " " + month;
};
export const colorsList = [
  "#a8193d",
  "#4fcc25",
  "#1ebffa",
  "#8da377",
  "#9975bd",
  "#cf61a1",
  "#240959",
];

export const getUpdatedListWithDragEvent = ({boardLists, boardId, cardId, targetCard}: DragEventData) => {
  const sourceBoardIndex = boardLists.findIndex(
    (item: IList) => item.id === boardId,
  );
  if (sourceBoardIndex < 0) return;

  const sourceCardIndex = boardLists[sourceBoardIndex]?.cards?.findIndex(
    (item) => item.id === cardId,
  );
  if (sourceCardIndex < 0) return;

  const targetBoardIndex = boardLists.findIndex(
    (item: IList) => item.id === targetCard.boardId,
  );
  if (targetBoardIndex < 0) return;

  const targetCardIndex = boardLists[targetBoardIndex]?.cards?.findIndex(
    (item) => item.id === targetCard.cardId,
  );
  if (targetCardIndex < 0) return;

  const tempBoardsList = [...boardLists];
  const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
  tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
  tempBoardsList[targetBoardIndex].cards.splice(
    targetCardIndex,
    0,
    sourceCard,
  );

  return tempBoardsList;
}