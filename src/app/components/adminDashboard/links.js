const links = [
  {
    id: 1,
    title: "Dashboard",
    links: "/adminDashboard",
    icon: "",
    bg: "#fff",
  },
  {
    id: 2,
    title: "Teacher",
    links: "/adminDashboard/teacher",
    icon: "",
    bg: "#fff",
  },
  {
    id: 2,
    title: "Teacher",
    links: "/adminDashboard/teacher",
    icon: "",
    bg: "#fff",
  },
  {
    id: 2,
    title: "Teacher",
    links: "/adminDashboard/teacher",
    icon: "",
    bg: "#fff",
  },
];

export function getLinks() {
  return links;
}

export function getLink(id) {
  return links.find((p) => p._id === id);
}
