import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import "./SideBar.css";

const SideBarData = [
    {
        name: "Home",
        path: "/dashboard",
        icon: "icon icon-home",
    },
    {
        name: "Syllabus",
        path: "",
        icon: "icon icon-biotech",
        iconClosed: "icon icon-arrow_back_ios",
        iconOpened: "icon icon-arrow_back_ios",
        subNav: [
            {
                name: "View Syllabus",
                path: "/syllabus/view",
            },
            {
                name: "Create Syllabus",
                path: "./icons-source/create.svg",
            }
        ]
    },
    {
        name: "Training Program",
        path: "",
        icon: "icon icon-biotech",
        iconClosed: "icon icon-arrow_back_ios",
        iconOpened: "icon icon-arrow_back_ios",
        subNav: [
            {
                name: "View Program",
                path: "/training/view",
            },
            {
                name: "Create Program",
                path: "/training/create",
            }
        ]
    },
    {
        name: "Class",
        path: "",
        icon: "icon icon-school",
        iconClosed: "icon icon-arrow_back_ios",
        iconOpened: "icon icon-arrow_back_ios",
        subNav: [
            {
                name: "View Class",
                path: "/class/view",
            },
            {
                name: "Create Class",
                path: "/class/create",
            }
        ]
    },
    {
        name: "Training Calendar",
        path: "/training/calendar",
        icon: "icon icon-calendar_today",
    },
    {
        name: "User Management",
        path: "",
        icon: "icon icon-group",
        iconClosed: "icon icon-arrow_back_ios",
        iconOpened: "icon icon-arrow_back_ios",
        subNav: [
            {
                name: "List User",
                path: "/user/list",
            },
            {
                name: "User Permission",
                path: "/user/permission",
            }
        ]
    },
    {
        name: "Learning Materials",
        path: "/materials",
        icon: "icon icon-folder",
    },
    {
        name: "Setting",
        path: "",
        icon: "icon icon-setting",
        iconClosed: "icon icon-arrow_back_ios",
        iconOpened: "icon icon-arrow_back_ios",
        subNav: [
            {
                name: "Calendar",
                path: "/setting/calendar",
            }
        ]
    }
]
const SubMenu = ({ menuItem },{navIsOpen}) => {
    const [subNav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subNav);

    return (
        <>
            <Link to={menuItem.path}>
                <button onClick={menuItem.subNav && showSubNav}>
                    <i className={menuItem.icon + " text-[20px]"} /> {menuItem.name}
                    
                    {/* {menuItem.subNav && subNav
                        ? <span className="!float-right"><i className={menuItem.iconOpened + " text-[20px]"} /></span>
                        : menuItem.subNav
                            ? <span className="!float-right"><i className={menuItem.iconClosed + " text-[20px]"} /></span>
                            : null} */}
                </button>
            </Link>
            {subNav && menuItem.subNav.map((subItem, index) => {
                return (
                    <Link to={subItem.path} key={index}>
                        <button className="!text-center">
                            {subItem.name}
                        </button>
                    </Link>
                )
            })}
        </>
    );
}
export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        }
    }

    toggleSideBar = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

  render() {
    return (
        <nav className="NavBar overflow-auto overflow-x-hidden p-2 absolute left-0 whitespace-nowrap w-1/5 bg-[#FFFAE6] text-[#EE964B] h-full duration-300 z-0 shadow-inner" 
        style={{ width: this.state.isOpen ? "20%" : "52px"}}>
        <button onClick={this.toggleSideBar}>
            <i className={this.state.isOpen ? "icon icon-menu_open text-[20px]" : "icon icon-menu_collapse text-[20px]"} />
        </button>

        {SideBarData.map((menuItem, index) => {
            return (
                <SubMenu menuItem={menuItem} key={index}/>
            );
        })}
    </nav>
    )
  }
}
