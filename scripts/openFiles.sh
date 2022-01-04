#!/bin/bash
cd src
if [ $# == 0 ]; then
    vim -p App.scss pages/Home.tsx pages/Projects.tsx pages/Education.tsx pages/Interests.tsx \
        pages/Workflow.tsx \
        "+vs App.tsx"
elif [ $1 == 'c' ]; then
    vim -p components/PostList.scss components/Project.tsx components/GitHubFeed.scss components/ImageSlider.scss components/SideBar.scss components/Navbar.scss \
        "+vs components/PostList.tsx | tabn | tabn" \
        "+vs components/GitHubFeed.tsx | tabn" \
        "+vs components/ImageSlider.tsx | tabn" \
        "+vs components/SideBar.tsx | tabn" \
        "+vs components/Navbar.tsx | tabfirst"
fi
