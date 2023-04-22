import React from "react"
import Header from "../components/studentsDashboard/Header";

export const metadata = {
    title: "Students Dashboard",
    description: "This is the student dashboard",
  };

export default function Layout({ children }) {
  return (
    <section>
      <div>
        <Header>{children}</Header>
      </div>
    </section>
  );
}
