import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { StudentPage } from "./pages/StudentPage";
import { CoursePage } from "./pages/CoursePage";
import { EnrollmentPage } from "./pages/EnrollmentPage";

function App() {
  return (
    <div className="bg-sky-50  min-h-screen">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/student" element={<StudentPage/>}></Route>
          <Route path="/course" element={<CoursePage/>}></Route>
          <Route path="/enrollment" element={<EnrollmentPage/>}></Route>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
