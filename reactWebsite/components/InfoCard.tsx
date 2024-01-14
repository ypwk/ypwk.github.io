import React, { useState, useRef } from "react";

interface InfoCardProps {
  title: string;
  period: string[] | string;
  institution?: string | undefined;
  location?: string | undefined;
  advisor?: string | undefined;
  link?: string | undefined;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  period,
  institution = undefined,
  location = undefined,
  advisor = undefined,
  link = undefined,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="expandable-item">
      <div className="expandable-header" onClick={toggleOpen}>
        <div className="title">
          {link ? (
            <h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                {title}
              </a>
            </h3>
          ) : (
            <h3>{title}</h3>
          )}
          <div className="details">
            <div className="left-details">
              <div className="detail">
                {period instanceof Array ? period.join(" - ") : period}
              </div>
              {advisor && <div className="detail">{advisor}</div>}
            </div>
            <div className="right-details">
              {institution && <div className="detail">{institution}</div>}
              {location && <div className="detail">{location}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
