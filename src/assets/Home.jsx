import React from "react";
import amazon from "../assets/images/amazoncard.png"
import savenow from "../assets/images/savenow.png"
import cashnow from "../assets/images/cashnoow.png"
import flexnow from "../assets/images/flexnow.png"
import lootnow from "../assets/images/lootnow.png"
import grabnow from "../assets/images/grabnow.png"



/* ------------------ PRODUCT DATA ------------------ */
const products = [
  { name: "Amazon Giftcard",  originalPrice: "₹1000",image:amazon },
  { name: "CashNow",  originalPrice: "₹140",image:cashnow },
  { name: "FlexNow", originalPrice: "₹180",image:flexnow},
  { name: "LootNow",  originalPrice: "₹80",image:lootnow },
  { name: "GrabNow", originalPrice: "₹29",image:grabnow},
 
];

/* ------------------ CARD STYLES ------------------ */
const cardStyle = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "16px",
  color: "#f1f5f9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
};

const highlightStyle = {
  background: "linear-gradient(135deg, #5099F7, #cafff8ff)",
  color: "#0f172a"
};

/* ------------------ PRODUCT CARD COMPONENT ------------------ */
const ProductCard = ({ name, cashback, originalPrice,image }) => {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "16px",
        overflow: "hidden",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}
    >
   
      {/* Product Image */}
      <div style={{ width: "100%", height: "220px", background: "#fff" }}>
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px"
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
       

        <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{name}</h3>

        <p style={{ fontSize: "14px", margin: "6px 0" ,fontWeight:"bold"}}>
          Rs <span style={{ color: "white" }}>{originalPrice}</span>
        </p>

        {/* Button */}
        <button
          style={{
            marginTop: "12px",
            width: "100%",
            background: "#f97316",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Buy Coupon
        </button>
      </div>
    </div>
  );
};


/* ------------------ BILL UPLOAD COMPONENT ------------------ */
const BillUpload = () => {
  return (
    <div
      style={{
        border: "2px dashed #334155",
        borderRadius: "20px",
        padding: "60px 20px",
        background: "#0f172a",
        textAlign: "center",
        color: "#94a3b8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        transition: "0.3s",
      }}
    >
      {/* Upload Icon */}
      <div
        style={{
          width: "60px",
          height: "60px",
          background: "rgba(148,163,184,0.1)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <span style={{ fontSize: "28px", color: "#22d3ee" }}>🔗</span>
      </div>

      {/* Title */}
      <h3 style={{ color: "white", fontSize: "20px", fontWeight: "600" ,  }}>
        Upload Bills
      </h3>

      {/* Subtitle */}
      <p style={{ fontSize: "14px", opacity: 0.8 }}>
        Drag and drop your bills here, or click to browse
      </p>

      <p style={{ fontSize: "12px", opacity: 0.5 }}>
        Supports PDF and image files
      </p>

      {/* File Input (hidden UI but clickable) */}
      <input
        type="file"
        accept=".pdf, image/*"
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};



/* ------------------ MAIN HOME COMPONENT ------------------ */
const Home = () => {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>SaveNow</h1>
      <h3>Your Savings Overview</h3>

      {/* DASHBOARD CARDS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {/* CARD 1 */}
        <div style={{ ...cardStyle, ...highlightStyle }}>
          <span style={{ opacity: 0.8, fontSize: "14px" }}>Total Savings</span>
          <span style={{ fontSize: "32px", fontWeight: "700" }}>₹12,450</span>
          <span style={{ opacity: 0.7, fontSize: "12px" }}>Lifetime cashback earned</span>
        </div>

        {/* CARD 2 */}
        <div style={cardStyle}>
          <span style={{ opacity: 0.8, fontSize: "14px" }}>Coupons Purchased</span>
          <span style={{ fontSize: "32px", fontWeight: "700" }}>24</span>
          <span style={{ opacity: 0.7, fontSize: "12px" }}>Active coupons: 8</span>
        </div>

        {/* CARD 3 */}
        <div style={cardStyle}>
          <span style={{ opacity: 0.8, fontSize: "14px" }}>Time Remaining</span>
          <span style={{ fontSize: "28px", fontWeight: "700" }}>18 Days</span>
          <span style={{ opacity: 0.7, fontSize: "12px" }}>Renews on Dec 26, 2025</span>
        </div>

        {/* CARD 4 */}
        <div style={cardStyle}>
          <span style={{ opacity: 0.8, fontSize: "14px" }}>Plan Validity</span>
          <span style={{ fontSize: "28px", fontWeight: "700" }}>1 Month</span>
          <span style={{ opacity: 0.7, fontSize: "12px" }}>SaveNow Plus</span>
        </div>

         <div style={{ ...cardStyle, ...highlightStyle }}>
          <span style={{ opacity: 0.8, fontSize: "14px" }}>Membership</span>
          <span style={{ fontSize: "32px", fontWeight: "700" }}>SaveNow+</span>
          <span style={{ opacity: 0.7, fontSize: "12px" }}>Member since 2024</span>
        </div>
      </div>
      

      {/* PRODUCTS SECTION */}
      <section className="mb-10 mt-10" style={{marginTop:"80px"}}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold mt-40">Available Coupons</h2>
        
        </div>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "20px"
  }}
>
  {products.map((product, index) => (
    <ProductCard key={index} {...product} />
  ))}
</div>

      </section>

      {/* BILL UPLOAD SECTION */}
      <section  style={{marginTop:"80px"}}>
        <h2 >Upload Your Bills</h2>
        <p className="text-sm text-muted mb-4">
          Upload your purchase receipts to claim cashback on eligible items.
        </p>
        <BillUpload />
      </section>
    </div>
  );
};

export default Home;
