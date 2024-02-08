import { IList } from "../Interfaces";

export const ApiMockResponse: IList[] = [
  {
    id: 1651319512266.7095,
    title: "To Do",
    cards: [
      {
        id: 1651319552926.0933,
        title: "Create Muti-board page",
        labels: [{ color: "#cf61a1", text: "Page" }],
        date: "2022-05-05",
        tasks: [
          { id: 1651319625559.8025, completed: false, text: "Task1_subtask1" },
          { id: 1651319629650.8945, completed: false, text: "Task1_subtask2" },
        ],
        desc: "Mult-board page is important so user can create new boards and even move lists between them. Also we need to introduce routes when introduce the multi-page concept.",
      },
      {
        id: 1651319568365.593,
        title: "Change background color/image",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        tasks: [],
        desc: "This would be a good addition to the application as it will give us the summary of all the dashboard list."
      },
      {
        id: 1651319568365.593,
        title: "Create constant files",
        labels: [{ color: "#1ebffu", text: "Constant" }],
        date: "",
        tasks: [],
        desc: "Constant files are needed and are very important in terms of scalibility and matainability."
      },
      {
        id: 1651319568365.593,
        title: "Integrate chat GPT (Extra)",
        labels: [{ color: "#1ebffu", text: "Chat GPT" }],
        date: "",
        tasks: [],
        desc: "Integrate chat GPT for summarize the dashboard list"
      },
    ],
  },
  {
    id: 1651319523126.113,
    title: "In Progress",
    cards: [
      {
        id: 16513196723785.5078,
        title: "Drag-Drop should work with the whole list",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        tasks: [],
        desc: "For now, drag-drop is working fine except when the the list is empty."
      },
    ],
  },
  {
    id: 1651319530017.122,
    title: "In-Review",
    cards: [
      {
        id: 1651319677070.0732,
        title: "Random Task 1",
        labels: [{ color: "#8da377", text: "figma" }],
        date: "2022-05-06",
        tasks: [],
      },
      {
        id: 1651319677874.0732,
        title: "Random Task 2",
        labels: [{ color: "#8da377", text: "figma" }],
        date: "2022-05-06",
        tasks: [],
      },
    ],
  },
  {
    id: 1651319535931.4182,
    title: "Completed",
    cards: [
      {
        id: 1651319680948.0479,
        title: "Add and label columns",
        labels: [{ color: "#9975bd", text: "Columns" }],
        date: "2022-02-08",
        tasks: [
          { id: 1651319820180.9648, completed: true, text: "Add columns" },
          { id: 1651319833779.3252, completed: true, text: "Remove columns" },
          { id: 1651329824279.3252, completed: true, text: "Change the label of columns" },
        ],
      },
      {
        id: 165132424248.0479,
        title: "Add and edit cards",
        labels: [{ color: "#1ebffa", text: "Cards" }],
        date: "2022-02-08",
        tasks: [
          { id: 1651319820180.9648, completed: true, text: "Add Cards" },
          { id: 1651319833779.3252, completed: true, text: "Edit Cards" },
        ],
      },
      {
        id: 165131323133.0479,
        title: "Move cards between columns",
        labels: [{ color: "#9975bd", text: "Columns" }],
        date: "2022-02-08",
        tasks: [
          { id: 1651319820180.9648, completed: true, text: "Move cards within the same list" },
          { id: 1651319833779.3252, completed: true, text: "Move card in any other list" },
          { id: 2423319833779.3252, completed: true, text: "Use default Drag and Drop feature" },
        ],
      },
      {
        id: 1651319642211.0479,
        title: "interactions are intuitive",
        labels: [{ color: "#1ebffa", text: "Interaction" }],
        date: "2022-02-08",
        tasks: [
          { id: 1651319820180.9648, completed: true, text: "Cards are draggable" },
          { id: 1651319833779.3252, completed: true, text: "User can see the card moving" },
        ],
      },
      {
        id: 1651312424242.0479,
        title: "Local storage get/set",
        labels: [{ color: "#cf61a1", text: "LocalStorage" }],
        date: "2022-02-08",
        tasks: [
          { id: 1651319820180.9648, completed: true, text: "Local storage set" },
          { id: 1651319833779.3252, completed: true, text: "Local storage get" },
        ],
      }
    ],
  },
];
