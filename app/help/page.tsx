import React from "react";

const HelpPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Get Help</h1>

      {/* Search Bar */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <input
          type="text"
          placeholder="What can we help you with?"
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Section */}
        <div style={{ flex: 2 }}>
          <h2>What payment options can I use on Nike orders?</h2>
          <p>
            We want to make buying your favorite Nike shoes and gear online fast and easy&apos; and we accept the following
            payment options:
          </p>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Diners Club</li>
            <li>Discover</li>
            <li>American Express</li>
            <li>Visa Electron</li>
            <li>Maestro</li>
          </ul>
          <p>
            If you enter your PAN information at checkout&apos; you’ll be able to pay for your order with PayTM or a local
            credit or debit card.
          </p>
          <p>Apple Pay</p>
          <p>
            <strong>Nike Members</strong> can store multiple debit or credit cards in their profile for faster checkout.
            If you’re not already a Member&apos;{" "}
            <a href="#" style={{ color: "blue", textDecoration: "underline" }}>
              join us today
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Join Us
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Shop Nike
            </button>
          </div>

          {/* FAQs */}
          <h3 style={{ marginTop: "40px" }}>FAQs</h3>
          <h4>Does my card need international purchases enabled?</h4>
          <p>
            Yes&apos; we recommend asking your bank to enable international purchases on your card. You will be notified at
            checkout if international purchases need to be enabled.
          </p>
          <p>
            Please note&apos; some banks may charge a small transaction fee for international orders.
          </p>
          <h4>Can I pay for my order with multiple methods?</h4>
          <p>No&apos; payment for Nike orders can’t be split between multiple payment methods.</p>
          <h4>What payment method is accepted for SNKRS orders?</h4>
          <p>You can use any accepted credit card to pay for your SNKRS order.</p>
          <h4>Why don’t I see Apple Pay as an option?</h4>
          <p>
            To see Apple Pay as an option in the Nike App or on Nike.com&apos; you’ll need to use a compatible Apple device
            running the latest OS&apos; be signed in to your iCloud account&apos; and have a supported card in your Wallet.
            Additionally&apos; you’ll need to use Safari to use Apple Pay on Nike.com.
          </p>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", paddingLeft: "80px" }}>Contact Us</h3>
          <img src="/get help.png" alt="Help Icon" style={{ maxWidth: "100%" }} />
          
          <div style={{ margin: "20px 0" }}>
            <img src="/msj.png" alt="Message Icon" style={{ maxWidth: "100%" }} />
          </div>
          <div style={{ margin: "20px 0" }}>
            <img src="/email.png" alt="Email Icon" style={{ maxWidth: "100%" }} />
          </div>
          <div style={{ margin: "20px 0" }}>
            <img src="/location.png" alt="Location Icon" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
