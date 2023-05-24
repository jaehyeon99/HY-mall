import Nav from "./components/Nav";
import Main from "./components/Main";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Reco from "./components/Reco";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';



const queryClient = new QueryClient()

function App(){
  return(
      <QueryClientProvider client={queryClient}>
      <div className="max-w-5xl m-auto">
        <Nav/>
          <BrowserRouter>
              <Routes>
              <Route path="/" exact element={<Main/>} />
              <Route path="/Reco" element={<Reco/>} />
              </Routes>
          </BrowserRouter>
      </div>
      </QueryClientProvider>
  )
}

export default App;