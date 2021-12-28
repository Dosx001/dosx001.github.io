#!/bin/bash
cd src
vim -p components/SideBar.scss components/Navbar.scss App.scss \
    "+vs components/SideBar.tsx | tabn" \
    "+vs components/Navbar.tsx | tabn" \
    "+vs App.tsx | tabm 0" \
