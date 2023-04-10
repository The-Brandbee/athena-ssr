import React from "react";
const ArrowTop = () => {
    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>

            {scrollTop && (
                <button onClick={bottomToTop} className="backToTop">
                    &#8593;
                </button>
            )}
        </>
    );
};
export default ArrowTop;