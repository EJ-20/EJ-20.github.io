import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Service Agent</h3>
            <h4 className="vertical-timeline-element-subtitle">GeekSquad</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management, Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2023 - September 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Programmer Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Innovmarine</h4>
            <p>
              <li>Collaborated on a cross-functional team to create a SAAS web application using JavaScript, C#, Razor, Bootstrap, and HTML.</li>
              <li>Conducted code reviews, thorough testing, ensuring adherence to best practices, functionality, quality, and user satisfaction.</li>
              <li>Managed SQL databases, optimizing schema design and performance, identified and resolved software bugs.</li>
              <li>Contributed to comprehensive documentation for ETL softwares, web applications, and database processes.</li>
              <li>Developed VBA and PowerQuery ETL transformations, enhancing data quality.</li>
              <li>Used PowerBI for data visualization and building relations between tables from SQL servers</li>
          
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2021 - December 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">GeekSquad</h4>
            <p>
            Conducted in-depth troubleshooting using diagnostic tools, ensuring accurate problem identification and swift solutions.
            Interact effectively with customers, gathering detailed issue information and providing clear, non-technical explanations of solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2021 - August 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior IT Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Beef & Butter</h4>
            <p>
            Seamlessly integrated restaurant profiles with delivery apps, ensuring accurate menu information and pricing.
            Revamped website using HTML, CSS, and JavaScript, elevating online presence and user experience.
            Collaborated with stakeholders for effective integration and documented technical changes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;