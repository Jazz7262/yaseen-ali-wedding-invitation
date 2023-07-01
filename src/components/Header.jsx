import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3>
                Begin With The Name Of Allaah, The Most Benificient And The Most
                Merciful
            </h3>

            {/* <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                Rahamatullaahi Alaih, Adoni.
            </h4> */}

            {/* <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Maamu - Bhanja Rahamatullaahi Alaih, Bhiwandi.
            </h4> */}

            {/* <h4 className="mt-4">
                Under the Blessings of:
                <br />
                Hazrath Syed Shah Ismail Quadri, Sajjada Nasheen Dargah Niloor
                Shareef, Gulbarga Dist.
            </h4> */}

            <h4 className="mt-4">
                With the blessings of
                <br />
                Late Mrs. & Mr. Mohammed Ismail Saifullah Sahab.
            </h4>
        </section>
    );
}

export default Header;
