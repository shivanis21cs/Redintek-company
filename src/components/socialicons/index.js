import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.Instagram && (
          <li>
            <a href={socialprofils.Instagram}>
              <FaInstagram/>
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
