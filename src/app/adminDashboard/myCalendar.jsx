import React, { useState } from "react";
import Calendar, { Day } from "react-calendar";
import "./styles/calendar.module.css";
import "../styles/globals.css";
import ColorPicker from "./ColorPicker";

const activities = [
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
];

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const [color, setColor] = useState("");
  const [showTime, setShowTime] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventColor, setEventColor] = useState("");

  const filteredActivities = activities.filter(
    (activity) =>
      new Date(activity.startDate) <= date && new Date(activity.endDate) >= date
  );

  const handleDateChange = (date) => {
    setSelectedDate(null);
    setDate(date);
  };

  const openModal = (date) => {
    setSelectedDate(date);
    setStartDate(date);
    setEndDate(date);
    setEventTitle("");
    setEventColor("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStartDateChange = (date) => {
    const newDate = new Date(date);
    setStartDate(newDate);
  };

  const handleEndDateChange = (date) => {
    const newDate = new Date(date);
    setEndDate(newDate);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddActivity = () => {
    const newActivity = {
      title: eventTitle,
      description: description,
      startDate: showTime ? startDate : new Date(startDate.toDateString()),
      endDate: showTime ? endDate : new Date(endDate.toDateString()),
      color: eventColor,
    };
    activities.push(newActivity);
    closeModal();
    setDate(new Date(date)); // Update the date state to trigger re-render
  };

  const handleDeleteActivity = (activity) => {
    const index = activities.findIndex((a) => a === activity);
    if (index !== -1) {
      activities.splice(index, 1);
    }
  };

  const handleToggle = () => {
    setShowTime(!showTime);
  };

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
          tileContent={({ date }) => {
            const activitiesForDate = activities.filter(
              (activity) =>
                new Date(activity.startDate).toDateString() ===
                  date.toDateString() ||
                new Date(activity.endDate).toDateString() ===
                  date.toDateString()
            );

            const isSelectedDate =
              selectedDate &&
              selectedDate.toDateString &&
              selectedDate.toDateString() === date.toDateString();
            const hasEventTitle =
              isSelectedDate && eventTitle && eventTitle.trim() !== "";

            return (
              <div className="tile-content">
                <div className="events">
                  {activitiesForDate.map((activity, index) => (
                    <div
                      key={index}
                      className={`activity activity-${activity.color}`}
                      title={activity.title}
                    >
                      {activity.title}
                    </div>
                  ))}
                </div>
                {isSelectedDate && hasEventTitle && (
                  <div
                    className={`activity activity-${eventColor}`}
                    title={eventTitle}
                  >
                    {eventTitle}
                  </div>
                )}
              </div>
            );
          }}
          dayComponent={({ date, ...props }) => (
            <Day
              {...props}
              className={`${props.className} ${
                new Date().toDateString() === date.toDateString() ? "today" : ""
              }`}
              onDoubleClick={() => openModal(date)}
            />
          )}
        />
      </div>
      {showModal && (
        <section className="modal">
          <div className="modal-arrow"></div>
          <div className="modal-header">
            <button onClick={closeModal}>Cancel</button>
            <h2>Add Events</h2>
            <button onClick={handleAddActivity}>Add</button>
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
              value={startDate.toISOString().slice(0, 10)}
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
                  setStartDate((prevState) => {
                    const newDate = new Date(prevState);
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
              value={endDate.toISOString().slice(0, 10)}
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
                  setEndDate((prevState) => {
                    const newDate = new Date(prevState);
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
                onChange={(event) => setShowTime(!event.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <ColorPicker
            selectedColor={eventColor}
            onSelectColor={setEventColor}
          />
        </section>
      )}
    </div>
  );
};

export default MyCalendar;
