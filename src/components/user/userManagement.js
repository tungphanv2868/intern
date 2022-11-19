import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./userManagement.modul.css";
import SideBar from "./SideBar";
import "../icons-dist/icons.css";
import Table from "./Table";


export default class userManagement extends Component {
  render() {
    return (
      <div className="w-full fixed">
        <header
          style={{
            gap: "899px",
            width: "100%",
            minHeight: "70px",
            background: "#2D3748",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px 10px 40px",
            }}
          >
            <div
              className="logo_left"
              style={{ width: "82px", height: "40px" }}
            >
              <img
                src="./images/logo/fpt-logo-5B8F17203A-seeklogo.com.png"
                height={8}
              />
            </div>

            <div
              className="logo_right"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "40px",
              }}
            >
              <div
                className="uniGate rounded-[15px] bg-[#0B2136]
                 text-white leading-3 w-108 h-30 p-3 mr-5"
              >
                <span>uniGate</span>
              </div>
              <div className="userLogin flex justify-center items-center">
                <div>
                  <img
                    src="./images/logo/cat.png"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="text text-white pl-1">
                  <p
                    className="truncate w-20 h-5"
                    style={{ fontSize: "17px", fontWeight: "500" }}
                  >
                    Warrior
                  </p>
                  <a className="text-white leading-4">Log out</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section>
          
          <div className="navigation">
            <SideBar/>
          </div>
          
          <div className="main">
            <div className="title-h3">
              <h2>User Management</h2>
            </div>
            <hr />
            <div className="topbar mt-4">
              <div className="search">
                <label>
                  <input type="text" placeholder="Tìm kiếm" />
                  <ion-icon name="search-outline" />
                </label>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-gray-800
                 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                  hover:bg-gray-900 hover:shadow-lg
                   focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Filter
                </button>
              </div>

              <div className="button">
                <button
                  type="button"
                  class="mr-3 inline-block px-6 py-2.5 bg-yellow-500 text-white
                   font-medium text-xs leading-tight uppercase rounded shadow-md
                    hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 
                    focus:shadow-lg focus:outline-none focus:ring-0
                     active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Import
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-gray-800 text-white 
                  font-medium text-xs leading-tight uppercase rounded shadow-md
                   hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 
                   focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Add new
                </button>
              </div>
            </div>
              
            <div className="details">
            <Table/>
            </div>
          </div>
        </section>

        <footer>
        <div
        className="footer"
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0px",
          width: "100%",
          backgroundColor: "#0D3B66",
          height: "70px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <div
          className="footer_text"
          style={{
            font: "Roboto",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#ffff",
            verticalAlign: "top",
            margin: "auto",
          }}
        >
          <span>Copyright @2022 BA Warrior. All right reserved</span>
        </div>
      </div>

        </footer>
      </div>
    );
  }
}
