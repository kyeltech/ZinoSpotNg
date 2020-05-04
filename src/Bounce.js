import React from "react"
import Welcome from "./Components/navLink/Welcome"
// import App from "./App"

function Bounce() {
  React.useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = React.useState(false);

  const stickyRef = React.useRef(null);
  const handleScroll = () => {
    if(stickyRef.current){
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
    }
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll));

  return (
    <React.Fragment>
      {/* <App sticky={isSticky} /> */}
      <Welcome stickyRef={stickyRef} />
    </React.Fragment>
  );
}
export default Bounce