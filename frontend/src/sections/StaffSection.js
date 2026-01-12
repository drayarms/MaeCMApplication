import React from "react";

const staff = [
  {
    name: "Ron",
    img: require("../assets/staff/ron_2_600_399.jpg"),
    text: "Ron, our president and owner has a degree in chemical engineering. Thirty five years ago, he built MAE CM SERVICES from scratch and has been vigorously involved in every aspect of the company to date. He has managed various types of projects including manufacturing plants, gas stations, water treatment facilities, retail, and multi-family dwellings. With his wealth of knowledge, Ron is an asset on any project."
  },
  {
    name: "Allen",
    img: require("../assets/staff/allen_600_399.jpg"),
    text: "With thirteen years of experience Allen, is our electrical project manager specializing in residential and commercial projects. He specializes in home automation using the latest technology. His constant need for learning and growing knowledge of the latest innovations is appreciated greatly by our clients."
  },
  {
    name: "Massoud Sinaie",
    img: require("../assets/staff/maecmservices-2.jpg"),
    text: "Massoud, our project coordinator, has thirty plus years of experience in the construction field, consulting, geotechnical engineering, and material testing. He provides support to not only all staff members but all clients as well. He pays meticulous attention to detail and is very hands-on, resulting in incredible finished projects."
  },
  {
    name: "Vimla Gossai",
    img: require("../assets/staff/maecmservices-4.jpg"),
    text: "Vimla is our project/accounts manager. From actively being on jobsites to permit expediting and accounting, she is involved from the very beginning to the end of each project, ensuring our clients are satisfied in every phase of construction."
  },
  {
    name: "Josh Eliassian",
    img: require("../assets/staff/maecmservices-3.jpg"),
    text: "Josh is our sales and marketing director. He is consistently educating himself to keep up with modern architecture, construction, state and federal bills to ensure we know everything about a project before we begin. He also has a degree in finance which allows him to prepare budgets, estimates, and be actively involved in every department here at MAE CM."
  }
];

export default function StaffSection() {
  return (
    <div className="container py-5">
      <h3 className="section-heading">Meet the Staff</h3>
      <div className="little-thin-gold-line" />

      <div className="row">
        {staff.map((s, i) => (
          <div className="col-md-4 text-center mb-4" key={i}>
            <img src={s.img} className="img-fluid mb-3" alt={s.name} />
            <h5 className="literature-heading">{s.name}</h5>
            <div className="little-thin-gold-line" />
            <p className="literature">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

