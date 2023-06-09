import React from 'react';
import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  const handleAccept = () => {
    console.log("Cookies accepted");
  }

  const handleDecline = () => {
    console.log("Cookies declined");
  }

  return (
    <CookieConsent 
      location="bottom" 
      buttonText="Accept"
      style={{ background: "#f5f5f5ba", color: "#242424", fontSize: "15px", borderRadius: "5px", padding: "20px 30px", margin: "0 auto", width: "100%", maxWidth: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins" }}
      buttonStyle={{ background: "#242424", color: "#fff", fontSize: "13px", borderRadius: "5px", padding: "10px 20px", margin: "0 10px",fontFamily: "ricordi"  }}
      declineButtonStyle={{ background: "#fff", color: "#242424", fontSize: "13px", borderRadius: "5px", padding: "10px 20px", margin: "0 10px", fontFamily: "ricordi", border: "1px solid #707070", }}
      declineButtonText="Decline"
      cookieName="cookieConsent" 
      expires={999} 
      debug={false}
      flipButtons
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.
    </CookieConsent>
  );
}