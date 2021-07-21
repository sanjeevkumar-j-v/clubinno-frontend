import React from 'react';
import logo from '../assets/img/logo.png';
import inno_logo from '../assets/img/inno-logo.png';
import profile from '../assets/img/avatar/sanjeev-avatar.jpg';

function Header(props) {
  return (
    <div class="header dark-bg">
      <div class="header-container">
        <div class="nav-logo">
          <a href="/">
            <b>
              <img src={logo} alt="" />
            </b>
            <span class="logo">
              <img src={inno_logo} style={{ height: 35 }} alt="" />
            </span>
          </a>
        </div>
        <ul class="nav-left">
          <li>
            <a class="sidenav-fold-toggler" href="javascript:void(0);">
              <i class="lni-menu"></i>
            </a>
            <a class="sidenav-expand-toggler" href="javascript:void(0);">
              <i class="lni-menu"></i>
            </a>
          </li>
        </ul>
        <ul class="nav-right">
          <li class="user-profile dropdown dropdown-animated scale-left">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img class="profile-img img-fluid" src={profile} alt="" />
            </a>
            <ul
              class="dropdown-menu dropdown-md"
              style={{ background: '#0e1624', border: '1px solid white' }}
            >
              <li>
                <ul class="list-media">
                  <li class="list-item avatar-info">
                    <div class="media-img">
                      <img src={profile} alt="" />
                    </div>
                    <div class="info">
                      <span style={{ color: 'white' }}>Sanjeev Kumar</span>{' '}
                      <br />
                      <span class="">Web Developer</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a href="">
                  <i class="lni-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="lni-lock"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
