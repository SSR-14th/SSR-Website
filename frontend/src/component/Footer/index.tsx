import React from "react";
import "./Footer.css";

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div>
            <footer>
                <div className="foot">
                  <div className="footer-list">
                    <p className="footer-text">Terms of Use</p>
                    <p className="footer-text">Privacy Police</p>
                  </div>
                  <p className="footer-text">© 2023 SSR. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

