import React from 'react';
import ClockAndGreeting from './modules/ClockAndGreeting';
import "./App.css";
import DateAndWeather from './modules/DateAndWeather';
import Calendar from './modules/Calendar';
import Lists from './modules/Lists';

function App() {
  return (
    <div className="App">
      <div className="container">
          <ClockAndGreeting/>
          <DateAndWeather/>
          <Calendar/>
          <Lists index="0"/>
          <Lists index="1"/>
      </div>
    </div>
  );
}

//todo:
//lists
//ruokalista api
/* API for finding "Kitchens":
https://www.jamix.fi/ruokalistapalvelu/rest/haku/public

API for reading the table:
http://fi.jamix.cloud/apps/menuservice/rest/haku/menu/<customerID>/<kitchenID>?lang=fi

GET Params:
    lang, language (fi, or en). Default = en.

    type, json or table. Default = json.

    date, start date in format yyyymmdd. Default = 0 (disabled).

    date2, ending date in format yyyymmdd. Default = 0 (disabled). */


export default App;
