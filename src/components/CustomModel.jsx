import React from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel1() {
    function handleClick() {
        $("#card").fadeOut();
        // $("#modal").fadeOut();
        $(".navbar").css("z-index", "2");
        $(".swing-icon").css("z-index", "2");
        $(".animated-logo").css("z-index", "2");
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        document.getElementById("audio").play();
        startScroll();
    }

    // auto scroll starts when user clicks on "open" button
    function startScroll() {
        var length = document.querySelector("html").offsetHeight;
        setTimeout(() => {
            $("html, body").animate(
                {
                    scrollTop: length - 500,
                },
                30000,
                "linear",
                function () {
                    $("html, body").animate(
                        {
                            scrollTop: 0,
                        },
                        5000,
                        function () {
                            document.querySelector(
                                "html"
                            ).style.scrollBehavior = "smooth";

                            $("html, body").off("click");
                        }
                    );
                }
            );
        }, 500);

        // stop the auto scroll when user clicks on screen
        setTimeout(function () {
            $("html, body").on("click", function (event) {
                $("html, body").stop();
                $("html, body").off("click");
                document.querySelector("html").style.scrollBehavior = "smooth";
            });
        }, 1000);
    }
    return (
        <section id="card">
            <div className="card-outer-wrapper">
                <div className="card-inner-wrapper">
                    <div className="card-content">
                        <h1 className="card-title m-0">Wedding Invitation</h1>
                        <img
                            src="../assets/images/line-divider.png"
                            alt="line_divider"
                            className="line-divider mb-4"
                        />
                        <h4>From:</h4>
                        <h4 className="invitor-name mb-5">
                            Mrs. & Mr. Mohammed Ishaq Ali
                        </h4>
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Open
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomModel1;
