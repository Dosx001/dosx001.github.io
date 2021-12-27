#!/bin/bash
cd src
vim -p SideBar.css Navbar.css App.css \
    "+vs SideBar.jsx | tabn" \
    "+vs Navbar.jsx | tabn" \
    "+vs App.jsx | tabm 0" \
