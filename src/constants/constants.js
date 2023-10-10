import { FaCalculator} from "react-icons/fa";
import {AiOutlineProject, AiOutlineCode, AiOutlineBarChart, AiOutlineSetting } from "react-icons/ai";

export const sideBarLinks = [
    {
        title: 'Projects',
        icon : <AiOutlineProject />,
        link: '/projects'
    },
    {
        title: 'Estimation',
        icon : <FaCalculator />,
        link: '/estimations'
    },
    {
        title: 'Features',
        icon : <AiOutlineCode />,
        link: '/features'
    },
    {
        title: 'Statistics',
        icon : <AiOutlineBarChart />,
        link: '/statistics'
    },
    {
        title: 'Settings',
        icon : <AiOutlineSetting />,
        link: '/settings'
    }
]

export const mediaFileType = {
    VIDEO: 'video',
    PICTURE: 'picture'
}

export const Authorization = (token) => {
    let _headers = {
        headers: {
            'Authorization': token
        }
    }

    return _headers;
}