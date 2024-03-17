import { Posts } from "./Posts";
import "./App.css";
import { QueryClient, QuertClientProvider } from "@transtack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    // provide React Query client to App
    <QuertClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </QuertClientProvider>
  );
}

export default App;
