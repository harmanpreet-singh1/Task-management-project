import { ICard } from "../../Interfaces";

// Interface defining props for the Card component
interface CardProps {
  card: ICard;
  boardId: number;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
}


function Card(props: CardProps) {
  return (
    <div className="Card"></div>
  )
}

export default Card;