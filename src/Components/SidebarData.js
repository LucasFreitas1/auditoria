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
            link: "/home"
        },
        {
            title: "Apontamentos",
            icon: <AppsIcon/>,
            link: "/apontamentos"
        },
        {
            title: "Arquivados",
            icon: <ArchiveIcon/>,
            link: "/arquivados"
        },
        {
            title: "Configurações",
            icon: <SettingsIcon />,
            link: "/configuracoes"
        },
        {
            title: "Logout",
            icon: <ExitToAppIcon />,
            link: "/Logout"
        },
] 