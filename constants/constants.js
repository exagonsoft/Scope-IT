import { FaPhabricator, FaCalculator } from "react-icons/fa";

export const sideBarLinks = [
    {
        title: 'New estimation',
        icon : <FaCalculator />,
        link: '/estimations'
    },
    {
        title: 'Features',
        icon : <FaPhabricator />,
        link: '/features'
    }
]