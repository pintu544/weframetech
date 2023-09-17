/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Nav = ({
  className,
  overlapGroupClassName,
  search = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/search-2-1.svg",
  overlapClassName,
  unitedStates = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/united-states-1-1.svg",
  divClassName,
  office = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/office-1-1.svg",
  checkbox = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/checkbox--1--1-1.svg",
  videoLesson = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/video-lesson-2-2-1.svg",
  bell = "https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/bell-1-1.svg",
}) => {
  return (
    <div className={`NAV ${className}`}>
      <div className="searchbox">
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className="search" alt="Search" src={search} />
          <div className="text-wrapper">Search here</div>
        </div>
      </div>
      <div className="div">OTHER MENUS</div>
      <div className="group">
        <div className={`overlap ${overlapClassName}`}>
          <div className="text-wrapper-2">ENGLISH</div>
          <img
            className="arrow"
            alt="Arrow"
            src="https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/arrow.svg"
          />
          <img className="united-states" alt="United states" src={unitedStates} />
        </div>
      </div>
      <div className="profile">
        <div className="profile-2">
          <div className="overlap-group-2">
            <div className="text-wrapper-3">Instructor Day</div>
            <div className={`text-wrapper-4 ${divClassName}`}>Super Admin</div>
          </div>
          <img
            className="img"
            alt="Arrow"
            src="https://cdn.animaapp.com/projects/650699a6f0a97f6b0e91c752/releases/65069a3f96d31c08b0a41645/img/arrow.svg"
          />
        </div>
        <div className="profile-picture" />
      </div>
      <div className="separator" />
      <div className="icons">
        <div className="folder">
          <div className="overlap-2">
            <img className="office" alt="Office" src={office} />
            <div className="dot-warning">
              <div className="div-wrapper">
                <div className="text-wrapper-5">!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="check">
          <div className="overlap-3">
            <img className="img-2" alt="Checkbox" src={checkbox} />
            <div className="dot-counter">
              <div className="overlap-group-3">
                <div className="text-wrapper-6">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="activities">
          <div className="overlap-4">
            <img className="img-2" alt="Video lesson" src={videoLesson} />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <div className="text-wrapper-7">5</div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification">
          <div className="overlap-3">
            <img className="img-2" alt="Bell" src={bell} />
            <div className="dot-counter">
              <div className="overlap-group-3">
                <div className="text-wrapper-8">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  search: PropTypes.string,
  unitedStates: PropTypes.string,
  office: PropTypes.string,
  checkbox: PropTypes.string,
  videoLesson: PropTypes.string,
  bell: PropTypes.string,
};
