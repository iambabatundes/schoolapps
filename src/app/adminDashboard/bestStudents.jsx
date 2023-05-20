import React, { useState, useEffect, useMemo } from "react";
import { getBestStudents } from "./bestStudent";
import BestHeader from "./bestHeader";
import StudentCard from "./StudentCard";
import style from "./bestStudents.module.css";

const ITEMS_PER_PAGE = 3;
const SLIDE_DURATION_MS = 1000;
const PARENT_CLASSES = {
  Primary: ["Pry 1", "Pry 2", "Pry 3", "Pry 4", "Pry 5", "Pry 6"],
  Junior: ["Jss 1", "Jss 2", "Jss 3"],
  Senior: ["Ss 1", "Ss 2", "Ss 3"],
  College: ["Year 1", "Year 2", "Year 3", "Year 4"],
  Evening: ["Evening 1", "Evening 2", "Evening 3"],
};

function useFilteredStudents(bestStudents, selectedClass) {
  const { class: selectedClassValue, year: selectedYear } = selectedClass;  
  const filteredStudents = useMemo(() => {
    return bestStudents.filter((student) => {
      const isSameYear = student.year.toString() === selectedYear;
      const isSameParentClass =
        student.studentClass.startsWith(selectedClassValue);
      const isSameClass = PARENT_CLASSES[selectedClassValue].includes(
        student.studentClass
      );
      return isSameYear && (isSameParentClass || isSameClass);
    });
  }, [bestStudents, selectedClass]);

  return filteredStudents;
}

function useSlideshow(bestStudents) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % bestStudents.length;
      setCurrentIndex(nextIndex);
      if ((nextIndex + 1) % ITEMS_PER_PAGE === 0) {
        setStartIdx((startIdx + ITEMS_PER_PAGE) % bestStudents.length);
      }
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [bestStudents, currentIndex, startIdx]);

  return [currentIndex, startIdx];
}

function BestStudents() {
  const [selectedClass, setSelectedClass] = useState({
    class: "Primary",
    year: "2023",
  });
  const bestStudents = getBestStudents();
  const filteredStudents = useFilteredStudents(bestStudents, selectedClass);
  const [currentIndex, startIdx] = useSlideshow(filteredStudents);

  const handleClassChange = (event) => {
    setSelectedClass({ ...selectedClass, class: event.target.value });
  };  

  const handleYearChange = (event) => {
    setSelectedClass({ ...selectedClass, year: event.target.value });
  };

  const handleClassSubmit = (event) => {
    event.preventDefault();
  };

  const renderStudentCards = () => {
    return filteredStudents
      .slice(startIdx, startIdx + ITEMS_PER_PAGE)
      .map((student, index) => (
        <StudentCard
          key={student.id}
          student={student}
          isActive={
            index === (currentIndex - startIdx) % ITEMS_PER_PAGE ||
            index + ITEMS_PER_PAGE ===
              (currentIndex - startIdx) % ITEMS_PER_PAGE
          }
        />
      ));
  };

  return (
    <section>
      <BestHeader
        handleClassChange={handleClassChange}
        handleYearChange={handleYearChange}
        handleClassSubmit={handleClassSubmit}
        selectedClass={selectedClass}        
      />
      <div className={style.bestStudents}>{renderStudentCards()}</div>
    </section>
  );
}

export default BestStudents;
