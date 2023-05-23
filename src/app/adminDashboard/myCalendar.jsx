import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/globals.css";
import ColorPicker from "./ColorPicker";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [color, setColor] = useState("");
  const [showTime, setShowTime] = useState(true);
  const [selectedDate, setSelectedDate] = useState(date);
  const [eventTitle, setEventTitle] = useState("");
  const [eventColor, setEventColor] = useState("");
  const [modalMode, setModalMode] = useState("add");  
  const [eventCount, setEventCount] = useState(0);

  const [activities, setActivities] = useState([
    {
      title: "Activity 1",
      description: "Description 1",
      startDate: new Date("2023-05-12"),
      endDate: new Date("2023-05-12"),
      color: "red",
    },
    {
      title: "Activity 2",
      description: "Description 2",
      startDate: new Date("2023-05-10"),
      endDate: new Date("2023-05-10"),
      color: "blue",
    },
    {
      title: "Activity 3",
      description: "Description 3",
      startDate: new Date("2023-05-11"),
      endDate: new Date("2023-05-11"),
      color: "green",
    },
  ]);  

  useEffect(() => {
    setStartDate(selectedDate);
    setEndDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  const openModal = (date) => {
    setSelectedDate(selectedDate);        

    const formattedDate = selectedDate.toDateString();
    const activityForSelectedDate = activities.find(
      (activity) =>
        activity.startDate.toDateString() === formattedDate ||
        activity.endDate.toDateString() === formattedDate
    );

    if (activityForSelectedDate) {
      setEventTitle(activityForSelectedDate.title);
      setEventColor(activityForSelectedDate.color);
      setDescription(activityForSelectedDate.description);
    } else {
      setEventTitle("");
      setEventColor("");
      setDescription("");
    }

    if (activityForSelectedDate) {
      setModalMode("edit");
      setEventCount(activityForSelectedDate.eventCount || 1);
    } else {
      setModalMode("add");
      setEventCount(0);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

    const handleColorChange = (color) => {
    setEventColor(color);
  };

  const handleAddActivity = () => {
    const newActivity = {
      title: eventTitle,
      description: description,
      startDate: showTime ? (startDate instanceof Date ? startDate.toISOString() : "") : (startDate || ""),
      endDate: showTime ? (endDate instanceof Date ? endDate.toISOString() : "") : (endDate || ""),
      color: eventColor,
    };
  
    if (eventTitle.trim() !== "") {
      if (modalMode === "edit") {
        const existingActivityIndex = activities.findIndex(
          (activity) =>
            (activity.startDate && startDate && activity.startDate.toDateString() === startDate.toDateString()) ||
            (activity.endDate && endDate && activity.endDate.toDateString() === endDate.toDateString()) ||
            activity.title === eventTitle
        );
  
        if (existingActivityIndex !== -1) {
          const updatedActivities = [...activities];
          updatedActivities[existingActivityIndex] = newActivity;
          setActivities(updatedActivities);
        }
      } else {
        setActivities((prevActivities) => [...prevActivities, newActivity]);
      }
    }
  
    closeModal();
  };  

  const handleDeleteActivity = () => {
    if (eventTitle.trim() !== "") {
      const updatedActivities = activities.filter(
        (activity) =>
          (!activity.startDate || activity.startDate.toDateString() !== startDate.toDateString()) ||
          (!activity.endDate || activity.endDate.toDateString() !== endDate.toDateString()) ||
          activity.title !== eventTitle
      );
      setActivities(updatedActivities);
      closeModal();
    }
  };
  

  const handleToggle = () => {
    setShowTime((prevShowTime) => !prevShowTime);
  };

  const tileContent = ({ date }) => {
    const activitiesForDate = activities.filter((activity) => {
      const startDate = activity.startDate;
      const endDate = activity.endDate;
  
      if (startDate && endDate) {
        return (
          startDate.toDateString() === date.toDateString() ||
          endDate.toDateString() === date.toDateString()
        );
      } else if (startDate) {
        return startDate.toDateString() === date.toDateString();
      } else if (endDate) {
        return endDate.toDateString() === date.toDateString();
      }
  
      return false;
    });

    const isSelectedDate =
      selectedDate &&
      selectedDate.toDateString &&
      selectedDate.toDateString() === date.toDateString();
    const hasEventTitle =
      isSelectedDate && eventTitle && eventTitle.trim() !== "";

    let selectedColor = "";

    if (isSelectedDate && eventColor) {
      selectedColor = eventColor;
    } else {
      const activityForSelectedDate = activities.find(
        (activity) =>
          activity.startDate.toDateString() === date.toDateString() ||
          activity.endDate.toDateString() === date.toDateString()
      );
      if (activityForSelectedDate) {
        selectedColor = activityForSelectedDate.color;
      }
    }

    return (
      <div className="tile-content">
        <div className="events">
          {activitiesForDate.map((activity, index) => (
            <div
              key={index}
              className={`activity activity-${activity.color}`}
              title={activity.title}
              style={{ backgroundColor: activity.color }}
            >
              {activity.title}
            </div>
          ))}
          {isSelectedDate && eventCount > 1 && (
            <div className="event-count">+{eventCount - 1} more</div>
          )}
        </div>
        {isSelectedDate && hasEventTitle && (
          <div
            className={`activity activity-${selectedColor}`}
            title={eventTitle}
            style={{ backgroundColor: selectedColor }}
            onClick={() => {
              setEventTitle(eventTitle);
              setEventColor(eventColor);
              setDescription(description);
              setModalMode("edit");
              setShowModal(true);
            }}
          >
            {eventTitle}
          </div>
        )}
      </div>
    );
  };

  const dayComponent = ({ date, ...props }) => (
    <div
      {...props}
      className={`${props.className} ${
        new Date().toDateString() === date.toDateString() ? "today" : ""
      }`}
      onDoubleClick={() => openModal(date)}
    />
  );

  return (
    <div>
      <div
        className={`calendar-container ${showModal ? "modal-open" : ""}`}
        onDoubleClick={openModal}
      >
        <Calendar
          value={date}
          onChange={handleDateChange}
          className="MyCalendar"
          tileContent={tileContent}
          dayComponent={dayComponent}
        />
      </div>
      {showModal && (
        <section className="modal">
          <div className="modal-arrow"></div>
          <div className="modal-header">
            <button onClick={closeModal}>Cancel</button>
            {modalMode === "add" ? <h2>Add Event</h2> : <h2>Edit Event</h2>}
            {modalMode === "add" ? (
              <button onClick={handleAddActivity}>Add</button>
            ) : (
              <button onClick={handleAddActivity}>Save</button>
            )}
            {eventCount > 1 && <span>{eventCount} more</span>}
          </div>

          <div className="modal-heading">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={eventTitle}
              onChange={(event) => setEventTitle(event.target.value)}
            />
          </div>
          <div className="modal-heading">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="modal-heading">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              onChange={(event) =>
                handleStartDateChange(new Date(event.target.value))
              }
            />

            {!showTime && (
              <input
                type="time"
                id="startTime"
                value={`${startDate
                  .getHours()
                  .toString()
                  .padStart(2, "0")}:${startDate
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
                onChange={(event) =>
                  setStartDate((prevStartDate) => {
                    const newDate = new Date(prevStartDate);
                    newDate.setHours(event.target.value.split(":")[0]);
                    newDate.setMinutes(event.target.value.split(":")[1]);
                    return newDate;
                  })
                }
              />
            )}
          </div>
          <div className="modal-heading">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate ? endDate.toISOString().slice(0, 10) : ""}
              onChange={(event) =>
                handleEndDateChange(new Date(event.target.value))
              }
            />
            {!showTime && (
              <input
                type="time"
                id="endTime"
                value={`${endDate
                  .getHours()
                  .toString()
                  .padStart(2, "0")}:${endDate
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
                onChange={(event) =>
                  setEndDate((prevEndDate) => {
                    const newDate = new Date(prevEndDate);
                    newDate.setHours(event.target.value.split(":")[0]);
                    newDate.setMinutes(event.target.value.split(":")[1]);
                    return newDate;
                  })
                }
              />
            )}
          </div>

          <div className="modal-heading">
            <label htmlFor="allDay">All day:</label>
            <label className="switch">
              <input
                type="checkbox"
                id="allDay"
                checked={!showTime}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="modal-heading">
            <label htmlFor="color">Color:</label>
            <ColorPicker
              id="color"
              color={eventColor}
              onColorChange={handleColorChange}
            />
          </div>

          {modalMode === "edit" && (                        
              <button id="delete" onClick={handleDeleteActivity} className="btn-delete">
                Delete
              </button>            
          )}
        </section>
      )}
    </div>
  );
};

export default MyCalendar;
