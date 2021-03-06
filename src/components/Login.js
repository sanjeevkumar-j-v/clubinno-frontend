import React from 'react';
import lights from '../assets/img/lights.jpeg';
import '../assets/css/register.css';

function login(props) {
  return (
    <div class="main-content" style={{ padding: 0 }}>
      <div class="container-fluid">
        <div class="container">
          <div class="box">
            <input type="checkbox" id="toggle" class="box__toggle" hidden />
            <img src={lights} alt="Join us" class="box__image" />
            <form class="form form--register" action="">
              <h1 class="form__title">Sign up</h1>

              <div class="form__helper">
                <input
                  type="text"
                  name="user"
                  id="new-user"
                  placeholder="User"
                  class="form__input"
                />
                <label class="form__label" for="new-user">
                  User
                </label>
              </div>

              <div class="form__helper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="form__input"
                />
                <label class="form__label" for="email">
                  Email
                </label>
              </div>

              <div class="form__helper">
                <input
                  type="password"
                  name="password"
                  id="new-user-password"
                  placeholder="Password"
                  class="form__input"
                />
                <label class="form__label" for="new-user-password">
                  Password
                </label>
              </div>

              <div class="form__helper">
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  Placeholder="Confirm password"
                  class="form__input"
                />
                <label class="form__label" for="confirm-password">
                  Confirm password
                </label>
              </div>

              <button type="submit" class="form__button">
                Register
              </button>

              <p class="form__text">
                Already have an account?
                <label for="toggle" class="form__link">
                  Sign in!
                </label>
              </p>
            </form>

            <form class="form form--login" action="">
              <h1 class="form__title">Sign in</h1>

              <div class="form__helper">
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="User"
                  class="form__input"
                />
                <label class="form__label" for="user">
                  User
                </label>
              </div>

              <div class="form__helper">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  class="form__input"
                />
                <label class="form__label" for="password">
                  Password
                </label>
              </div>

              <button type="submit" class="form__button">
                Login
              </button>

              <p class="form__text">
                Don't have an account?
                <label for="toggle" class="form__link">
                  Sign up!
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
