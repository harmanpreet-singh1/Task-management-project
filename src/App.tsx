import Dashboard from "./Pages/Home/Dashboard";
import { AppStateProvider } from "./Contexts";
import { initialState } from "./Reducers";

console.log("initialState", initialState);

// Utilizing a provider to manage state across the application, ensuring its accessibility throughout.
// In a real-world scenario, multiple providers might be employed, and external state management libraries could be integrated for enhanced functionality and scalability.
function App() {
  return (
    <AppStateProvider>
      <Dashboard />
    </AppStateProvider>
  );
}

export default App;
