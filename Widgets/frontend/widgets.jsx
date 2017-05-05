import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("widget");
  ReactDom.render(<Clock/> , widget);
});
