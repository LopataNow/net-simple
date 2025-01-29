import Name from "./components/name"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Name/>
    </QueryClientProvider>
  )
}

export default App
