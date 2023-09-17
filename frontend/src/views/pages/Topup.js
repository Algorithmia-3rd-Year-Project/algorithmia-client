import PaymentModal from "../components/PaymentModal";

const Topup = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      <button>Click me</button>
      <PaymentModal
        // Use a unique value for the orderId
        orderId={45896588}
        name="Just For You Mom Ribbon Cake"
        amount="4500"
      />
    </div>
  );
};

export default Topup;
