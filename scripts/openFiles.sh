#!/bin/bash
cd src
vim -p components/SideBar.css components/Navbar.css App.css \
    "+vs components/SideBar.jsx | tabn" \
    "+vs components/Navbar.jsx | tabn" \
    "+vs App.jsx | tabm 0" \
