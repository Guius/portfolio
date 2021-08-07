// library imports
import Typed from "react-typed";

const TitleText = (props) => {
  return (
    <Typed
      strings={props.strings}
      typeSpeed={80}
      backspeed={1000}
      backDelay={5000}
      className={props.style}
      loop
    />
  );
};

export default TitleText;
