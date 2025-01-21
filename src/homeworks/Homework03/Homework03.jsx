import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Homework03() {
    return (
        <div className="homework03-wrapper">
      <div className="form-container">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Button name="Send email" />
      </div>
    </div>
      );
  }
  
  export default Homework03;
