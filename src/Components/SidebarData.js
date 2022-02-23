import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        title: "Apontamentos",
        icon: <AppsIcon />,
        link: "/apontamentos",
    },
    {
        title: "Follow up",
        icon: <FactCheckIcon />,
        link: "/followup",
    },
    {
        title: "Arquivados",
        icon: <ArchiveIcon />,
        link: "/arquivados",
    },
    {
        title: "Configurações",
        icon: <SettingsIcon />,
        link: "/configuracoes",
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/logout",
    },
] 