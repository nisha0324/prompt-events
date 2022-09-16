import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MenuItem } from './MenuItem';
import './Sidemenu.css';

const menuItems = [
    { name: "All Events", to: `/all-events`, iconClassName: `bi bi-collection` },
    {
        name: "Calendar Events",
        // to: `/calendar-events`,
        iconClassName: `bi bi-calendar-event`,
        subMenus: [
            { name: "Today's Events", to: "/todays-events" },
            { name: "Upcoming Events", to: "/upcoming-events" }
        ]
    },
    { name: "Add Events", to: `/add-events`, iconClassName: `bi bi-plus-square` },
    { name: "Settings", to: `/settings`, iconClassName: `bi bi-app-indicator` }
];

export const Sidemenu = (props) => {

    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove('active')
            })
            
        }

        props.onCollapse(inactive);   

    }, [inactive]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={`sidemenu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="toggle-menu-btn"
                    onClick={() => setInactive(!inactive)}>
                    {inactive ? <i className="bi bi-arrow-right-square-fill"></i>
                        : <i className="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className="main-menu">
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                to={menuItem.to}
                                subMenus={menuItem.subMenus || []}
                                iconClassName={menuItem.iconClassName}
                                onClick={() => {
                                    if (inactive) {
                                        setInactive(false)
                                    }
                                }}
                            />
                        ))
                    }
                </ul>
            </div>

            <div className="side-menu-footer">
                <div className="user-icon">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="user-info">
                    <span>Nisha</span>
                    <span>Premium User</span>
                </div>
            </div>
        </div>
    )
}