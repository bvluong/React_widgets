import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';


document.addEventListener("DOMContentLoaded", () => {
  const names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"];
  const widget = document.getElementById("widget");
  ReactDom.render(
    <div>
    <Clock/>
    <Weather/>
    <AutoComplete names={names}/>
    </div>,
    widget
  );
});
