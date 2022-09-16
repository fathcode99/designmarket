import React from "react";
import './componentStyle.css'

export default function Navbar() {
  return (
    <nav>
         <div class="logo">
            Brand
         </div>
         <input type="checkbox" id="click"></input>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Feedback</a></li>
         </ul>
      </nav>
  )
}