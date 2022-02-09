import React, { useState, useEffect } from "react";
import Parser from "html-react-parser";
import lunch from "../Schedule";
import schedule from "../Schedule";
import "./List.css";
import moment, { Moment } from "moment";

const links: any = [
  {
    name: "Oppiq",
    link: "https://e-oppi.opiq.fi/Account/Login",
  },
  {
    name: "Edita",
    link: "https://shop.edita.fi/digiedita/omat-tuotteet",
  },
  {
    name: "Otava",
    link: "https://opiskelija.otava.fi/",
  },
  {
    name: "SanomaPro",
    link: "https://kampus.sanomapro.fi/",
  },
  {
    name: "Wilma",
    link: "https://kauniainen.inschool.fi/",
  },
  {
    name: "Classroom",
    link: "https://classroom.google.com/h",
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/",
  },
  {
    name: "KaavaEditori",
    link: "https://math-demo.abitti.fi/",
  },
];
const days: string[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "saturday",
  "sunday",
];

function Lists(props: any) {
  var element: string = "";

  const [d, setD] = useState(new Date());
  const [now, setNow] = useState(moment(`${d.getHours()}:${d.getMinutes()}`, "hh:mm"));

  useEffect(() => {
    var timer = setInterval(() => {
      setD(new Date());
      setNow((moment(`${d.getHours()}:${d.getMinutes()}`, "hh:mm")));
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const updateState:Function = () => {
    var sched = schedule.schedule[days[d.getDay()-1]];
    
    for (const key in sched) {
      const lesson = sched[key];
      let nextLesson:any;

      try {
        nextLesson = sched[`${parseInt(key)+1}`];
      } catch (error) {
        console.log(error);
      }

      const starts:Moment = moment(lesson.starts, "hh:mm");
      const ends:Moment = moment(lesson.ends, "hh:mm");

      if(lesson.subject === "") continue;

      if(ends >= now && starts <= now){
        element = `<div class="list__head list__title"><h4>${lesson.subject} ${lesson.room} (${ends.diff(now, "minute")}min)</h4></div>`;
      }
      else if(nextLesson !== undefined && nextLesson.subject !== ""){
        const nextStarts = moment(nextLesson.starts, "hh:mm");

        if(now > lesson.ends && now < nextStarts){
          element = `<div class="list__head list__title"><h4>${nextLesson.subject} ${nextLesson.room} (${nextStarts.diff(now, "minute")}min)</h4></div>`;
        }
      }
    }

    for (const link of links) {
      // List item
      element += `
          <a
          target="_blank"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    }
  }

  if (props.index === "0") {
    updateState()
  } else {
    var timeLeftH = now.diff(moment(lunch.lunch.starts, "hh:mm"), "hour");
    var timeLeftMin = now.diff(moment(lunch.lunch.starts, "hh:mm"), "minute")%60;



    element = `<div class="list__head list__title"><h4>Lounas ${
      timeLeftH > 0 ? timeLeftH + "h " : ""
    }${timeLeftMin}min</h4></div>`;
    
  }

  return (
    <div className={`card list ${props.index === "0" ? "list__1" : "list__2"}`}>
      {Parser(element)}
    </div>
  );
}

export default Lists;
