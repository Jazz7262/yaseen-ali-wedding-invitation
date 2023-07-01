import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Mohammed Ishaq Ali</h2>

                <h5 className="address mb-3">
                    Retd. Medical & Health Department,
                    <br />
                    Sangareddy.
                </h5>
                {/* <h5 className="address mb-3">
                    Residence: Opposite LLC Guest House,
                    <br /> Sudha Coss, Bellari,
                    <br /> Karnataka - 583 102.
                </h5> */}
                <p className="address">
                    Contact: <br />
                    +91 94920 04726, <br />
                    +91 97030 96318.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
