import { useState } from "react";

const treatmentsList = [
  "Basic Facials",
  "Deluxe Facials",
  "Moisturizing Facials",
  "Acne Treatments",
  "Eye Rejuvenating Treatment",
  "Eye and Lip Contour Treatment",
  "Eyelash Perm",
  "Eyelash Extension",
  "Eyebrow and Lash Tint",
  "Eyebrow Shaping",
  "Event Makeup",
  "Wedding Specials",
  "Body Waxing",
  "Face Waxing",
  "Pedicure",
  "Manicure",
  "Acrylic Nail",
  "Paraffin Dip for Hands and Feet",
];

export default function Appointment() {
  const [name, setName] = useState("");
  const [apDate, setApDate] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [treatments, setTreatments] = useState(treatmentsList[0]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const customerOrder = { name, apDate, phoneNo, treatments };
    console.log(customerOrder);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Book your appointment Here</h2>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Appointment: </label>
          <input
            type="date"
            value={apDate}
            onChange={(e) => setApDate(e.target.value)}
          />
        </div>
        <div>
          <label>Phone No: </label>
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <select
          id="cars"
          value={treatments}
          onChange={(e) => setTreatments(e.target.value)}
        >
          {treatmentsList.map((treatment) => (
            <option value={treatment} key={treatment}>
              {treatment}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </>
  );
}
