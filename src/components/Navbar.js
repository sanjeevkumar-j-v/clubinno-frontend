import React from 'react';

function Navbar(props) {
  return (
    <div class="side-nav expand-lg">
      <div class="side-nav-inner">
        <ul class="side-nav-menu">
          <li class="side-nav-header">
            <span>Navigation</span>
          </li>
          <li class="nav-item dropdown <%= page=='home'? 'open' : '' %>">
            <a href="/" class="dropdown-toggle">
              <span class="icon-holder">
                <i class="lni-home"></i>
              </span>
              <span class="title">Home</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='profile'? 'open' : '' %>">
            <a href="/profile" class="dropdown-toggle">
              <span class="icon-holder">
                <i class="lni-user"></i>
              </span>
              <span class="title">Profile</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='dashboard'? 'open' : '' %>">
            <a href="/dashboard" class="dropdown-toggle">
              <span class="icon-holder">
                <i class="lni-dashboard"></i>
              </span>
              <span class="title">Dashboard</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='event'? 'open' : '' %>">
            <a class="dropdown-toggle" href="#">
              <span class="icon-holder">
                <i class="lni-layers"></i>
              </span>
              <span class="title">Events</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li>
                <a href="/ongoing-event">Ongoing</a>
              </li>
              <li>
                <a href="/upcoming-event">Upcoming</a>
              </li>
              <li>
                <a href="/past-event">Past</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown <%= page=='blog'? 'open' : '' %>">
            <a class="dropdown-toggle" href="/blog">
              <span class="icon-holder">
                <i class="lni-gallery"></i>
              </span>
              <span class="title">Blog</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='office-bearers'? 'open' : '' %>">
            <a class="dropdown-toggle" href="/office-bearers">
              <span class="icon-holder">
                <i class="lni-heart"></i>
              </span>
              <span class="title">Office Bearers</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='contact'? 'open' : '' %>">
            <a class="dropdown-toggle" href="/contact">
              <span class="icon-holder">
                <i class="lni-phone"></i>
              </span>
              <span class="title">Contact</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
          <li class="nav-item dropdown <%= page=='admin'? 'open' : '' %>">
            <a class="dropdown-toggle" href="/admin">
              <span class="icon-holder">
                <i class="lni-cog"></i>
              </span>
              <span class="title">Admin Page</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
