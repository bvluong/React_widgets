import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tab from './tab';


document.addEventListener("DOMContentLoaded", () => {
  const names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"];
  const tabs = [ {"one": "I am the first"}, {"two": "Second pane here"}, {"three":"Third pane here"}];
  const widget = document.getElementById("widget");
  ReactDom.render(
    <div>
    <Clock/>
    <Weather/>
    <div>
      <Tab tabs={tabs}/>
      <AutoComplete names={names}/>
    </div>
    </div>,
    widget
  );
});
