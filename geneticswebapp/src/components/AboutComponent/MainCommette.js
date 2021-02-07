import React from "react";

import "./MainCommette.css";

import CommetteMember from "./CommetteMemberNew";

export default function MainCommette() {
  return (
    <div className="MainCommette">
      <div class="hero">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <CommetteMember />
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
    </div>
  );
}
