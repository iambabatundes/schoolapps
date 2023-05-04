import React from "react";
import {Poppins} from "next/font/google"
import Header from "../components/adminDashboard/Header";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  
});

export const metadata = {
  title: "Admin Dashboard",
  description: "This is the Admin dashboard",
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
