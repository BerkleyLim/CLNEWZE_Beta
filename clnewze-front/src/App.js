import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainView from "./components/main/index";
import Header from "./components/commom/header/index";
import Footer from "./components/commom/footer/index";

import Information from "./components/information/index";
import Introduction from "./components/introduction/index";
import PracticeRoom from "./components/practiceRoom/index";
import SheetMusic from "./components/sheetmusic/index";
import Teacher from "./components/teacher/index";
import Community from "./components/community/index";

import MypageHeader from "./components/mypage/header";
import Mypage from "./components/mypage/index";

function App() {
  return (
    <div className="App">
      <Router>
        {!window.location.href.includes("/mypage") ? (
          <Header />
        ) : (
          <MypageHeader />
        )}

        {!window.location.href.includes("/mypage") ? (
          <div className="container">
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/information" element={<Information />} />
              <Route path="/practiceRoom" element={<PracticeRoom />} />
              <Route path="/sheetmusic" element={<SheetMusic />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        ) : (
          <div className="mypage-container">
            <Mypage />
          </div>
        )}
        {!window.location.href.includes("/mypage") && <Footer />}
      </Router>
    </div>
  );
}

export default App;
