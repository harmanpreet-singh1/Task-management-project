import { createRoot } from 'react-dom/client';

import "./index.css";
import App from "./App";

const domNode: HTMLElement | null = document.getElementById('root');

const root = createRoot(domNode as Element);
root.render(<App />);
