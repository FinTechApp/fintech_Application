// PAGE: Transfer Success (Step 5)
// This is the final step — a success screen with a checkmark
// that tells the user their money was sent successfully.
// There is a button to go back to the dashboard.
// Route: /transfer/success

import React from "react";
import { useNavigate } from "react-router-dom";
import "./TransferSuccess.css";
import image from "./markicon.jpg";

const TransferSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="success-wrapper">
            <div className="success-card">

                {/* Icon */}
                <div className="icon">
                    <img src={image} alt="" />
                </div>

                {/* Title */}
                <h2>Transfer successful</h2>

                {/* Description */}
                <p>
                    Your transfer to Muhammed Ibrahim was successful.{" "}
                    <br />
                    <span
                        className="link"
                        onClick={() => navigate("/transactions")}
                        style={{ cursor: "pointer" }}
                    >
                        Click here
                    </span>{" "}
                    to view transaction details
                </p>

                {/* Button */}
                <button
                    className="done-btn"
                    onClick={() => navigate("/home")}
                >
                    Done
                </button>

            </div>
        </div>
    )
}

export default TransferSuccess;