import React from 'react';

const Header = () => {
        return (<div className="topbar">
      <a href ="./" className="logo-container">
              <div>
          <div className="logo">EDYODA</div>
          <p className="sub-logo">Stories</p>
          </div>
      </a>
      <div className="top1">
              <div>
      <div className="drop">
          Explore Categories   <span><img className="dropdownImg" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" />
          </span>
  </div>
  </div>
      <div className= "right-menu">
      <div className="rightMenuOne">
          <p className="rightMenuText">
          EdYoda is free learning and knowledge<br />sharing platform for techies
          </p>
      </div>
      <div className="btn-wrapper">
          <button  className="signup-btn">Go To Main Website</button>
      </div>
  </div>
  </div>
    </div>);
        }

        export default Header;