export interface ILabel {
  color: string;
  text: string;
}
  
export interface ITask {
  id: number;
  completed: boolean;
  text: string;
}

export interface ICard {
  id: number;
  title: string;
  labels: ILabel[];
  date: string;
  tasks: ITask[];
  desc?: string;
}

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
}

export interface AppStateData {
  lists: IList[];
}
  
export interface DragEventData {
  boardLists: IList[];
  boardId: number;
  cardId: number;
  targetCard: {
    boardId: number;
    cardId: number;
  };
}