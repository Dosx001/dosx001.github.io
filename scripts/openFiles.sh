#!/bin/bash
cd src
if [ $# == 0 ]; then
    vim -p App.scss pages/Projects.tsx pages/Education.tsx pages/Interests.tsx pages/Workflow.tsx \
        "+vs App.tsx"
elif [ $1 == 'c' ]; then
    vim -p components/SideBar.scss components/Navbar.scss components/PostList.scss \
        "+vs components/SideBar.tsx | tabn" \
        "+vs components/Navbar.tsx | tabn" \
        "+vs components/PostList.tsx | tabm 0"
fi
