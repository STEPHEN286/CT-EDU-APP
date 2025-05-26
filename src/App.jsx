import { RouterProvider } from "react-router-dom";

import routers from "./routes/MainRoute";
import ScrollToTop from "./utils/ScrollTop";

function App() {
  return (
    <>
 
      <RouterProvider router={routers} />
      {/* <ScrollToTop /> */}
    </>

    // </div>
  );
}

export default App;
