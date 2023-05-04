import React from "react";
import { Poppins } from "next/font/google";
import Header from "../components/studentsDashboard/Header";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Students Dashboard",
  description: "This is the student dashboard",
};

export default function Layout({ children }) {
  return (
    <section className={poppins.className}>
      <div>
        <Header>{children}</Header>
      </div>
    </section>
  );
}
