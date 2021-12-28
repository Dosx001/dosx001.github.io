#!/bin/bash
cd src
vim -p components/SideBar.scss components/Navbar.scss App.scss \
    "+vs components/SideBar.jsx | tabn" \
    "+vs components/Navbar.jsx | tabn" \
    "+vs App.jsx | tabm 0" \
