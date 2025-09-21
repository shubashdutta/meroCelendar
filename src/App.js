import Homepage from "./Component/Homepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paramarsha from "./Page/Paramarsha/Paramarsha";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer/Footer";
import TopNavbar from "./Common/TopNavbar";
import Mycalendar from "./Component/Mycalendar/Mycalendar";
import Loginpage from "./Component/Loginpage/Loginpage";
import Createaccount from "./Component/Loginpage/Createaccount";
import "./App.css";
import { Horoscope } from "./Page/Horoscope";
import Bolgspage from "./Page/BlogPage/Bolgspage";
import Blogpagedetails from "./Page/BlogPage/Blogpagedetails";
import News from "./Page/News/News";
import Forex from "./Page/More/Forex";
import DateConverter from "./Page/More/DateConverter";
import Holiday from "./Page/More/Holiday";
import SuvaSaitpage from "./Page/More/Suva_saitpage";
import { Bullionpage } from "./Page/More/Bullionpage";
import Radiopage from "./Page/Radio/Radiopage";
import PageNotFound from "./Page/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/paramasha" element={<Paramarsha />} />
          <Route path="/news" element={<News />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/bolgs_page" element={<Bolgspage />} />
          <Route path="/nepali-radio" element={<Radiopage />} />
          <Route path="/gold-silver-rates" element={<Bullionpage />} />
          <Route path="/nepali-to-english-date" element={<DateConverter />} />
          <Route path="/nepali-Holiday" element={<Holiday />} />
          <Route path="/suva-sait" element={<SuvaSaitpage />} />
          <Route path="/merocalendar" element={<Mycalendar />} />
          <Route path="/login_mero-calendar" element={<Loginpage />} />
          <Route path="/create" element={<Createaccount />} />
          <Route path="/blogspage" element={<Blogpagedetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
