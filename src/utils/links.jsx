import { Category, Message, Profile2User, Setting2, TaskSquare } from "iconsax-react"


const links = [
    {
        id:1,
        text: 'Home',
        path: '/',
        icon: <Category/>
    },
    {
        id:2,
        text: 'Messages',
        path: '/messages',
        icon: <Message/>
    },
    {
        id:3,
        text: 'Tasks',
        path: '/tasks',
        icon: <TaskSquare/>
    },
    {
        id:4,
        text: 'Members',
        path: '/memebers',
        icon: <Profile2User/>
    },
    {
        id:5,
        text: 'Settings',
        path: '/settings',
        icon: <Setting2/>
    },
]

export default links