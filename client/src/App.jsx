import { Outlet } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Pages/Footer";
 
const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
    </div>
  );
};

export default App;
