import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
          <nav>
            <ul className={classes.list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                    Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/basket"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Basket
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Payment
                </NavLink>
              </li>
              
            </ul>
          </nav>
        </header>
      );
}

export default MainNavigation