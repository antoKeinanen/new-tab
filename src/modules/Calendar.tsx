import React from "react";
import Parser from "html-react-parser";
import "./Calendar.css"

const daysInMonth:number[] = [31, new Date().getFullYear() % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const dayNames:string[] = ["ma", "ti", "ke", "to", "pe", "la", "su"]

function Calendar(){
    var d = new Date();
    var dd = d.getDate();
    var days:string = "";
    var fmd:number = new Date(d.getFullYear(), d.getMonth(), 1).getDay()-1;

    var lastMonth:number;
    if(d.getMonth() === 0) lastMonth = 11;
    else lastMonth = d.getMonth()-1;
    
    for (let i:number = 0; i <= 6; i++){
        days += `<h1 class="day_name">${dayNames[i]}</h1>`;
    }

    for (let i:number = 0; i < fmd; i++){
        var id = daysInMonth[lastMonth]-i;
        days += `
        <a
          href=""
          target="#"
          class="buttons__link past card "
        >
          <h1 class=""></h1>
        </a>`;
    }
    

    for (let i:number = 1; i <= daysInMonth[d.getMonth()]; i++) {
        days += `
        <a
          href=""
          target="#"
          class="buttons__link ${(i === dd) ? "today" : ""} card "
        >
          <h1 class="">${i}</h1>
        </a>`;
    }
 
    return(
        <div className="card calendar">
            {Parser(days)}
        </div>
    )
}

export default Calendar;