import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });
  return (
    <div
      style={{
        backgroundImage: "url(./images/logo/bg.png)",
        width: "100%",
        minHeight: "70vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header
        style={{
          gap: "899px",
          width: "100%",
          height: "79px",
          background: "#0D3B66",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 60px",
          }}
        >
          <div className="logo_left" style={{ width: "92px", height: "59px" }}>
            <img
              src="./images/logo/fpt-logo-5B8F17203A-seeklogo.com.png"
              height={10}
            />
          </div>

          <div className="logo_right" style={{ width: "92px", height: "59px" }}>
            <img
              src="./images/logo/fpt-logo-5B8F17203A-seeklogo.com.png"
              height={10}
            />
          </div>
        </div>
      </header>

      <section className="h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            padding: "50px 20px",
            gap: "50px",
            minHeight: "527px",
            left: " 28.68%",
            right: "26.53%",
            top: "25.27%",
            bottom: "17.57%",
            background: "#ffffff",
            boxShadow: "0px 20px, 40px rgba(0, 0, 0, 0.16)",
          }}
        >
          {/* title */}
          <div>
            <h3
              style={{
                width: "487px",
                height: "84px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "36px",
                lineHeight: "42px",
                textAlign: "center",
                letterSpacing: "0.2em",
                color: "#000000",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Forgot Password
            </h3>
            <span
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Enter your email address
            </span>
          </div>
          {/* input */}
          <div>
            <div>
              <input
                placeholder="Enter Email"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "20px",
                  margin: "20px 0",
                  gap: "10px",
                  lineHeight: "30px",
                  width: "389px",
                  height: "57px",
                  background: "#F1F1F1",
                  borderRadius: "10px",
                }}
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="text-red-500">{formik.errors.email}</div>
            </div>
            {/*  */}
            <button
              style={{
                width: "389px",
                height: "59px",
                gap: "10px",
                marginTop: "40px",
                padding: "20px",
                background: "#0D3B66",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                color: "#fff",
              }}
              type="submit"
            >
              <Link to="/newpassword">Continue</Link>
            </button>
          </div>
        </form>
      </section>
      <footer
        className="text-center lg:text-left"
        style={{ backgroundColor: "#0D3B66" }}
      >
        <div
          className="text-center p-5"
          style={{ backgroundColor: "#0D3B66", color: "#fff" }}
        >
          Copyright @2022 BA Warrior. All right reserved
        </div>
      </footer>
    </div>
  );
}
