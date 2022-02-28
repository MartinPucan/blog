import React from 'react';
import {customTimeline} from "../../data/customTimeline";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Introduction = () => {
  return (
    <div>
      {customTimeline.slice(0).reverse().map(item => (
        <div key={item.id} className="personal--year-wrapper">
          <h3>{item.year}</h3>
          <p>
            <div><FontAwesomeIcon icon={faBriefcase} /> {item.work}</div>
            {item.school && <div><FontAwesomeIcon icon={faGraduationCap} /> {item?.school}</div>}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Introduction;
