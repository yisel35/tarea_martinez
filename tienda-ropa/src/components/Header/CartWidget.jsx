import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <FaShoppingCart />
      <span style={{
        marginLeft: "5px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "2px 6px",
        fontSize: "12px"
      }}>
        0
      </span>
    </div>
  );
};
