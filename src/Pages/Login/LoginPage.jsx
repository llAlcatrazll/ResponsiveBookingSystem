import "./login.css";
import CJC_Logo from "../../assets/CJC_Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function LoginPage() {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const navigate = useNavigate();
  /*
  nodejs express for log in auth
  */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const blog = {
        emailUser,
        passwordUser,
      };
      // console.log(blog);
      const response = await fetch("http://192.168.1.188:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(blog),
      });
      // navigate("/LandingPage");
      const result = await response.json();
      console.log();
      if (result.message == "Invalid credential") {
        console.log("pop out");
      } else {
        console.log(result.token);
        localStorage.setItem("token", result.token);
        console.log("log in successfuly");
        navigate("/LandingPage");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <div className="Background_Image vw100">
        <div className="Background_Blur_Darkerner vw100">
          <form
            className="Login_Box flex-col"
            type="submit"
            onSubmit={handleSubmit}
          >
            <img src={CJC_Logo} className="CJC_Logo" />
            <input
              type="text"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
              placeholder="Email"
            />
            <input
              id="bottom_input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordUser(e.target.value)}
            />
            <button id="login_button" type="Submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
