#!/bin/bash
cd src
vim -p pages/Projects.tsx pages/Education.tsx pages/Interests.tsx \
    pages/Workflow.tsx components/Construction.tsx components/SideBar.scss components/Navbar.scss App.scss \
    "+ tabn 6 | vs components/SideBar.tsx | tabn" \
    "+vs components/Navbar.tsx | tabn" \
    "+vs App.tsx | tabm 0" \
