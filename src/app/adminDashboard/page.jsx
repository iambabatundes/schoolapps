"use client";
import React, { useState } from "react";
import style from "./styles/page.module.css";
import Featured from "../components/adminDashboard/featured";
import Icon from "../components/adminDashboard/Icon";
import Selection from "./Selection";
import BestStudents from "./bestStudents";
import BarChart from "../components/adminDashboard/BarChart";
import AcademyLine from "../components/adminDashboard/AcademyLine";
import RevenueLine from "../components/adminDashboard/RevenueLine";
import Calendar from "./calendar";
import OnlineMember from "./onlineMember";

function AdminDashboard() {
  const [selectedIcon, setSelectedIcon] = useState("groups");
  const [selectedSection, setSelectedSection] = useState("2022/2023");

  const datas = [
    "2022/2023",
    "2023/2024",
    "2024/2025",
    "2025/2026",
    "2026/2027",
  ];

  const handleChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleIconClick = (iconType) => {
    setSelectedIcon(iconType);
    setSelectedSection(selectedSection);
  };

  return (
    <section>
      <Featured />
      <div className={style.grid__container}>
        <div className={style.container}>
          <div className={style.main__perf}>
            <span className={style.PerStat}>
              <img src="/chart.gif" alt="Area Chart" width={20} height={20} />
              <h5>Performance / Statistics</h5>
            </span>
            <span className={style.performance__icon}>
              <Icon
                groups
                className={`${style.groups} ${
                  selectedIcon === "groups" ? style.selectedIcon : ""
                }`}
                onClick={() => handleIconClick("groups")}
              />
              <Icon
                graduationCap
                className={`${style.graduationCap} ${
                  selectedIcon === "graduationCap" ? style.selectedIcon : ""
                }`}
                onClick={() => handleIconClick("graduationCap")}
              />
              <Icon
                naira
                className={`${style.naira} ${
                  selectedIcon === "naira" ? style.selectedIcon : ""
                }`}
                onClick={() => handleIconClick("naira")}
              />
              <Icon reload className={style.reload} />
            </span>
          </div>
          <section className={style.school__perf}>
            <Selection
              onChange={handleChange}
              onSubmit={handleSubmit}
              datas={datas}
              value={selectedSection}
              children="Section"
            />

            <section className={style.download}>
              <Icon download />
              <h1>Download Statistics</h1>
            </section>
          </section>

          <div>
            {selectedIcon === "groups" && (
              <BarChart selectedSection={selectedSection} chartType="groups" />
            )}
            {selectedIcon === "graduationCap" && (
              <AcademyLine
                selectedSection={selectedSection}
                chartType="graduationCap"
              />
            )}
            {selectedIcon === "naira" && (
              <RevenueLine
                selectedSection={selectedSection}
                chartType="naira"
              />
            )}
          </div>
        </div>
        <section className={style.bestStudent}>
          <BestStudents />
          <section className={style.activity}>
          <div className={style.celender}>
            <Calendar />
          </div>
          {/* <div className={style.onlineMember}>
            <OnlineMember />
          </div> */}
        </section>  
        </section>              
      </div>
      <p>design by Babatunde Emmanuel</p>
      
    </section>
  );
}

export default AdminDashboard;
