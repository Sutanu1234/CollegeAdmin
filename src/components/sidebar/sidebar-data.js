import {
    BellDotIcon,
    BookCopyIcon,
    BookOpenTextIcon,
    BookPlusIcon,
    CalendarDaysIcon,
    ChartColumnBig,
    ChartLineIcon,
    ChartNetworkIcon,
    CrownIcon,
    FileBadgeIcon,
    FilePlus2Icon,
    FingerprintIcon,
    GraduationCapIcon,
    IdCardIcon,
    InboxIcon,
    IndianRupeeIcon,
    LibrarySquareIcon,
    MegaphoneIcon,
    MoreHorizontal,
    PenSquareIcon,
    Plus,
    ScrollTextIcon,
    UsersRoundIcon,
  } from "lucide-react"

export const data = {
    user: {
      name: "IIIT Kalyani",
      email: "iiitkalyani.office@gmail.com",
      avatar: "/colLogo.svg",
    },
    teams: [
      {
        name: "Admin",
        logo: CrownIcon,
        plan: "Office",
      },
      {
        name: "Library Admin",
        logo: LibrarySquareIcon,
        plan: "Library Department",
      },
      {
        name: "Finance Admin",
        logo: IndianRupeeIcon,
        plan: "Finance Department",
      },
    ],
    navMain: [
      {
        title: "Student",
        url: "/student",
        icon: GraduationCapIcon,
        isActive: true,
        items: [
          {
            title: "Add Student",
            url: "/addStudent",
            icon: Plus
          },
          {
            title: "All Students",
            url: "/allStudents",
            icon: UsersRoundIcon
          },
          {
            title: "Upload Result",
            url: "/result",
            icon: FileBadgeIcon
          },
          {
            title: "Upload Admit Card",
            url: "/admit",
            icon: IdCardIcon
          },
          {
            title: "Manage Subjects",
            url: "/addSubject",
            icon: BookCopyIcon
          },
        ],
      },
      {
        title: "Finance Department",
        url: "#",
        icon: IndianRupeeIcon,
        items: [
          {
            title: "Pending Requests",
            url: "/allrequest",
            icon: InboxIcon
          },
          {
            title: "Payment Status",
            url: "#",
            icon: ScrollTextIcon
          },
        ],
      },
      {
        title: "Library",
        url: "#",
        icon: BookOpenTextIcon,
        items: [
          {
            title: "Book Details",
            url: "/showBook",
            icon: BookPlusIcon
          },
          // {
          //   title: "Update Books",
          //   url: "#",
          //   icon: PencilLineIcon
          // },
          // {
          //   title: "Delete Book",
          //   url: "#",
          //   icon: Trash2Icon
          // },
        ],
      },
      {
        title: "ERP Registration",
        url: "#",
        icon: FingerprintIcon,
        items: [
          {
            title: "Manage ERP",
            url: "#",
            icon: PenSquareIcon
          },
        ],
      },
      {
        title: "More",
        url: "/more",
        icon: MoreHorizontal,
        items: [
          {
            title: "Make Announcement",
            url: "#",
            icon: MegaphoneIcon
          },
          {
            title: "Announcements & Notification",
            url: "#",
            icon: BellDotIcon
          },
          {
            title: "Calendar",
            url: "#",
            icon: CalendarDaysIcon
          },
        ],
      },
    ],
    projects: [
      {
        title: "Analytics",
        url: "#",
        icon: ChartLineIcon,
        items: [
            {
              title: "Total Students",
              url: "#",
              icon: ChartColumnBig
            },
            {
                title: "Performance(Batch Wise)",
                url: "#",
                icon: ChartNetworkIcon
            },
        ],
      },
      {
        title: "Generate",
        url: "#",
        icon: FilePlus2Icon,
        items: [
            {
              title: "Generate Admit Card",
              url: "#",
              icon: IdCardIcon
            },
            {
                title: "Generate Result Card",
                url: "#",
                icon: FileBadgeIcon
            },
        ],
      },
    ],
  }