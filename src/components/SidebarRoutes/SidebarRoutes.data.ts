import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react';

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Building2,
        label: "Companies",
        href: "/companies"
    },
    {
        icon: Calendar,
        label: "Calendar",
        href: "/task"
    }
]

export const dataToolsSideBar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href: "/faps"
    },
    {
        icon: BarChart4,
        label: "Analytics",
        href: "/analitics"
    }
]

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Setting",
        href: "/setting"
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security"
    }
]