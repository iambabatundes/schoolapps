import React from "react"
import Header from "../components/teachersDashboard/Header";

export const metadata = {
    title: "Teacher Dashboard",
    description: "This is the Teacher dashboard",
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
