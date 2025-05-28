import { RouterProvider } from "react-router-dom";
import routers from "./routes/MainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
function App() {
  // const 
  return (
    <>
  <QueryClientProvider client={queryClient}>
 {/* <Toaster
  position="top-center"
  reverseOrder={false}
/> */}



      <RouterProvider router={routers} />
    </QueryClientProvider>
    </>

    // </div>
  );
}

export default App;
