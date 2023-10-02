import { FaCalculator} from "react-icons/fa";
import {AiOutlineProject, AiOutlineCode, AiOutlineBarChart, AiOutlineSetting } from "react-icons/ai";

export const sideBarLinks = [
    {
        title: 'Projects',
        icon : <AiOutlineProject />,
        link: '/site/projects'
    },
    {
        title: 'Estimation',
        icon : <FaCalculator />,
        link: '/site/estimations'
    },
    {
        title: 'Features',
        icon : <AiOutlineCode />,
        link: '/site/features'
    },
    {
        title: 'Statistics',
        icon : <AiOutlineBarChart />,
        link: '/site/statistics'
    },
    {
        title: 'Settings',
        icon : <AiOutlineSetting />,
        link: '/site/settings'
    }
]