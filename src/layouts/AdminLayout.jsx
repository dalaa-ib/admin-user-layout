import { Link } from "react-router-dom";
import { useState } from "react";
import "./AdminLayout.css";

function AdminLayout({ children }) {
    const [pageColor, setPageColor] = useState("#f6f3ee");

    const colors = [
        { name: "Red", value: "#b85c5c" },
        { name: "Green", value: "#5f8d72" },
        { name: "Blue", value: "#5271a3" },
        { name: "Black", value: "#2b2b2b" },
    ];

    return (
        <div className="admin-layout" style={{ backgroundColor: pageColor }}>
            <aside className="admin-sidebar">
                <h3 className="admin-logo">Admin</h3>

                <div className="admin-links">
                    <Link to="/admin">Admin</Link>
                    <Link to="/user">User</Link>
                </div>

                <div className="admin-colors">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            className="admin-color-btn"
                            onClick={() => setPageColor(color.value)}
                        >
                            <span style={{ backgroundColor: color.value }}></span>
                            {color.name}
                        </button>
                    ))}
                </div>
            </aside>

            <main className="admin-main">{children}</main>
        </div>
    );
}

export default AdminLayout;