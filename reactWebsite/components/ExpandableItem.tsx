import React, { useState, useRef } from "react";

interface ExpandableItemProps {
  title: string;
  period: string[] | string;
  institution?: string | undefined;
  location?: string | undefined;
  advisor?: string | undefined;
  link?: string | undefined;
  description: string[];
}

const ExpandableItem: React.FC<ExpandableItemProps> = ({
  title,
  period,
  institution = undefined,
  location = undefined,
  advisor = undefined,
  link = undefined,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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
              {advisor && <div className="detail">Advisor: {advisor}</div>}
            </div>
            <div className="right-details">
              {institution && <div className="detail">{institution}</div>}
              {location && <div className="detail">{location}</div>}
            </div>
          </div>
        </div>
        <div className={`caret ${isOpen ? "open" : ""}`}>▼</div>
      </div>

      <div
        className={`expandable-content ${isOpen ? "expanded" : ""}`}
        ref={contentRef}
        style={
          isOpen && contentRef.current !== null
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="details-container"></div>
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ExpandableItem;
