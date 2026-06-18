import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserLayout.css";

function UserLayout({ children }) {
    const [pageColor, setPageColor] = useState("#f6f3ee");

    const colors = [
        { name: "Red", value: "#b85c5c" },
        { name: "Green", value: "#5f8d72" },
        { name: "Blue", value: "#5271a3" },
        { name: "Black", value: "#2b2b2b" },
    ];

    return (
        <div className="user-layout" style={{ backgroundColor: pageColor }}>
            <nav className="user-navbar">
                <h3 className="user-logo">User</h3>

                <div className="user-links">
                    <Link to="/user">User</Link>
                    <Link to="/admin">Admin</Link>
                </div>

                <div className="user-colors">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            className="user-color-btn"
                            onClick={() => setPageColor(color.value)}
                        >
                            <span
                                className="color-circle"
                                style={{ backgroundColor: color.value }}
                            ></span>

                            {color.name}
                        </button>
                    ))}
                </div>
            </nav>

            <main className="user-main">{children}</main>
        </div>
    );
}

export default UserLayout;