import React from "react";
import Header from "../components/adminDashboard/Header";

export const metadata = {
  title: "Admin Dashboard",
  description: "This is the Admin dashboard",
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
