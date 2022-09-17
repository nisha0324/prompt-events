import './App.css';
import { Sidemenu } from './components/Sidemenu/Sidemenu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllEvents } from './components/AllEvents/AllEvents'
import { TodaysEvents } from './components/CalendarEvents/TodaysEvents/TodaysEvents'
import { UpcomingEvents } from './components/CalendarEvents/UpcomingEvents/UpcomingEvents'
import { AddEvents } from './components/AddEvents/AddEvents'
import { Settings } from './components/Settings/Settings'
import { useState } from 'react';

function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Sidemenu onCollapse={(inactive) => {
          setInactive(inactive)
        }} />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>

            <Route path={"/"}
              element={<AllEvents />}
            />

            <Route path={"/all-events"}
              element={<AllEvents />}
            />

            <Route path={"/todays-events"}
              element={<TodaysEvents />}
            />

            <Route path={"/upcoming-events"}
              element={<UpcomingEvents />}
            />


            <Route path={"/add-events"}
              element={<AddEvents />}
            />

            <Route path={"/settings"}
              element={<Settings />}
            />

          </Routes>
        </div>


      </Router>
    </div>
  );
}

export default App; 