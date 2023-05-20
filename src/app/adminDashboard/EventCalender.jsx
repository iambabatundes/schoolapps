import React, { useState } from "react";
import Calendar from "react-calendar";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { EventCalendars } from "@mobiscroll/react-lite";
import "../styles/globals.css";
import ColorPicker from "./ColorPicker";

const EventCalender = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const [color, setColor] = useState("");
  const [activities, setActivities] = useState([]); // Uncomment to use the activities state

  const handleDateChange = (date) => {
    setDate(date);

    const filteredActivities = activities.filter(
      (activity) =>
        new Date(activity.startDate).toDateString() ===
          date.toDateString() ||
        new Date(activity.endDate).toDateString() === date.toDateString()
    );
    // Update the filteredActivities state or use it as needed
  };

  const openModal = () => {
    setShowModal(true);
    setStartDate(date);
    setEndDate(date);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddActivity = (event) => {
    event.stopPropagation(); // Prevents the calendar from triggering the modal open
    const newActivity = {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      color: color,
    };
    setActivities([...activities, newActivity]);
    setShowModal(false);
  };

  const handleDeleteActivity = (event) => {
    event.stopPropagation(); // Prevents the calendar from triggering the modal open
    const index = activities.findIndex((activity) => activity.title === event.title);
    if (index !== -1) {
      const updatedActivities = [...activities];
      updatedActivities.splice(index, 1);
      setActivities(updatedActivities);
    }
  };

  return (
    <div>
      <div className={`calendar-container ${showModal ? "modal-open" : ""}`} onDoubleClick={openModal}>
        <EventCalendars
          theme="ios"
          themeVariant="light"
          view={{
            calendar: { labels: true },
          }}
          eventList={activities} // Pass the activities array as the eventList
          onSelect={handleDateChange}
          onEventSelect={(event) => openModal(event.data)} // Handle event data if necessary
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
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>
          <div className="modal-heading">
          <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>

      <div className="modal-heading">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate.toISOString().slice(0, 10)}
          onChange={(event) => handleStartDateChange(new Date(event.target.value))}
        />
      </div>

      <div className="modal-heading">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate.toISOString().slice(0, 10)}
          onChange={(event) => handleEndDateChange(new Date(event.target.value))}
        />
      </div>

      <ColorPicker handleColorChange={handleColorChange} />

    </section>
  )}
</div>
)};

export default EventCalender;
