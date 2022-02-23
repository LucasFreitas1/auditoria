import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

export const SidebarData = [
        {
            title: "Home",
            icon: <HomeIcon/>,
            link: "/",
            cName: "nav-text"
        },
        {
            title: "Apontamentos",
            icon: <AppsIcon/>,
            link: "/apontamentos",
            cName: "nav-text"
        },
        {
            title: "Arquivados",
            icon: <ArchiveIcon/>,
            link: "/arquivados",
            cName: "nav-text"
        },
        {
            title: "Configurações",
            icon: <SettingsIcon />,
            link: "/configuracoes",
            cName: "nav-text"
        },
        {
            title: "Logout",
            icon: <ExitToAppIcon />,
            link: "/logout",
            cName: "nav-text"
        },
] 