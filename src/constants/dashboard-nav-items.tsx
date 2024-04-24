import {
  BellIcon,
  CircleDollarSignIcon,
  EyeIcon,
  FilePenLineIcon,
  FoldersIcon,
  GaugeIcon,
  HardHatIcon,
  HomeIcon,
  ReceiptIcon,
  SchoolIcon,
  SquareGanttChartIcon,
  StickyNoteIcon,
  UserCogIcon,
  UserIcon,
} from "lucide-react";

export const dashboardNavItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <GaugeIcon className="w-6 h-6" />,
  },
  {
    title: "Properties",
    url: "/dashboard/properties",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    title: "Applications",
    url: "/dashboard/applications",
    icon: <FilePenLineIcon className="w-6 h-6" />,
  },
  {
    title: "Application Review",
    url: "/dashboard/application-review",
    icon: <SquareGanttChartIcon className="w-6 h-6" />,
  },
  {
    title: "Viewing Requests",
    url: "/dashboard/viewing-requests",
    icon: <EyeIcon className="w-6 h-6" />,
  },
  {
    title: "Prospects",
    url: "/dashboard/prospects",
    icon: <SchoolIcon className="w-6 h-6" />,
  },
  {
    title: "Developers",
    url: "/dashboard/developers",
    icon: <HardHatIcon className="w-6 h-6" />,
  },
  {
    title: "Plans",
    url: "/dashboard/plans",
    icon: <StickyNoteIcon className="w-6 h-6" />,
  },
  {
    title: "Mortgages",
    url: "/dashboard/mortgages",
    icon: <FoldersIcon className="w-6 h-6" />,
  },
  {
    title: "Transactions and Earnings",
    url: "/dashboard/transactions",
    icon: <CircleDollarSignIcon className="w-6 h-6" />,
  },
  {
    title: "Account and Settings",
    url: "/dashboard/account-and-settings",
    icon: <UserIcon />,
    children: [
      {
        title: "Profile",
        url: "/dashboard/account-and-settings/profile",
        icon: <UserCogIcon />,
      },
      {
        title: "Notifications",
        url: "/dashboard/account-and-settings/notifications",
        icon: <BellIcon className="w-6 h-6" />,
      },
      {
        title: "Billing",
        url: "/dashboard/account-and-settings/billing",
        icon: <ReceiptIcon />,
      },
    ],
  },
];
