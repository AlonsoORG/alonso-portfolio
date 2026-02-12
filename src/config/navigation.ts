export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: "intro",
    label: "Intro",
    href: "#intro",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "work",
    label: "Work",
    href: "#work",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];
