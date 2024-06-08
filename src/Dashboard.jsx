const bookings = [
  { id: "1", phoneNo: "9064092100" },
  { id: "2", phoneNo: "9474893496" },
  { id: "3", phoneNo: "7029834860" },
];

export default function Dashboard() {
  return (
    <div>
      {bookings.map((customer) => (
        <p type="checkbox" key={customer.id}>
          {customer.phoneNo}
        </p>
      ))}
    </div>
  );
}
