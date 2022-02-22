import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
        {
            title: "Home",
            icon: <HomeIcon/>,
            link: "/home"
        },
        {
            title: "Apontamentos",
            icon: <HomeIcon/>,
            link: "/home"
        },
        {
            title: "Arquivados",
            icon: <ArchiveIcon/>,
            link: "/home"
        },
        {
            title: "Configurações",
            icon: <SettingsIcon />,
            link: "/home"
        },
        {
            title: "Logout",
            icon: <ExitToAppIcon />,
            link: "/home"
        },
] 