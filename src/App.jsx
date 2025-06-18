import { RouterProvider } from "react-router-dom";
import routers from "./routes/MainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
})

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
})

// const queryClient = new QueryClient();
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
