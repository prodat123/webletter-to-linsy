import React from 'react';
import About_1 from "./about/About_1";
import About_2 from "./about/About_2";
import About_3 from "./about/About_3";
import About_4 from "./about/About_4";
import About_5 from "./about/About_5";
import About_6 from "./about/About_6";
import About_7 from "./about/About_7";
import Contact_1 from "./contact/Contact_1";
import Contact_2 from "./contact/Contact_2";
import Contact_3 from "./contact/Contact_3";
import Contact_4 from "./contact/Contact_4";
import Contact_5 from "./contact/Contact_5";
import Faq_1 from "./faq/Faq_1";
import Faq_2 from "./faq/Faq_2";
import Footer_1 from "./footer/Footer_1";
import Hero_1 from "./hero/Hero_1";
import Hero_2 from "./hero/Hero_2";
import Hero_3 from "./hero/Hero_3";
import Hero_4 from "./hero/Hero_4";
import Hero_5 from "./hero/Hero_5";
import Hero_6 from "./hero/Hero_6";
import Hero_7 from "./hero/Hero_7";
import Hero_8 from "./hero/Hero_8";
import Hero_9 from "./hero/Hero_9";
import Hero_10 from "./hero/Hero_10";
import Navbar_1 from "./navbar/Navbar_1";
import Navbar_2 from "./navbar/Navbar_2";
import Navbar_3 from "./navbar/Navbar_3";
import Service_1 from "./service/Service_1";
import Service_10 from "./service/Service_10";
import Service_2 from "./service/Service_2";
import Service_3 from "./service/Service_3";
import Service_4 from "./service/Service_4";
import Service_5 from "./service/Service_5";
import Service_6 from "./service/Service_6";
import Service_7 from "./service/Service_7";
import Service_8 from "./service/Service_8";
import Service_9 from "./service/Service_9";
import Testimonials_1 from "./testimonials/Testimonials_1";
import Testimonials_2 from "./testimonials/Testimonials_2";
import PopupImage from "./popups/PopupImage";


// Map component names to React components
const componentMap = {
    'Navbar_1': Navbar_1,
    'Navbar_2': Navbar_2,
    'Navbar_3': Navbar_3,
    'Hero_1': Hero_1,
    'Hero_2': Hero_2,
    'Hero_3': Hero_3,
    'Hero_4': Hero_4,
    'Hero_5': Hero_5,
    'Hero_6': Hero_6,
    'Hero_7': Hero_7,
    'Hero_8': Hero_8,
    'Hero_9': Hero_9,
    'Hero_10': Hero_10,
    'About_1': About_1,
    'About_2': About_2,
    'About_3': About_3,
    'About_4': About_4,
    'About_5': About_5,
    'About_6': About_6,
    'About_7': About_7,
    'Service_1': Service_1,
    'Service_2': Service_2,
    'Service_3': Service_3,
    'Service_4': Service_4,
    'Service_5': Service_5,
    'Service_6': Service_6,
    'Service_7': Service_7,
    'Service_8': Service_8,
    'Service_9': Service_9,
    'Service_10': Service_10,
    'Contact_1': Contact_1,
    'Contact_2': Contact_2,
    'Contact_3': Contact_3,
    'Contact_4': Contact_4,
    'Contact_5': Contact_5,
    'Faq_1': Faq_1,
    'Faq_2': Faq_2,
    'Testimonials_1': Testimonials_1,
    'Testimonials_2': Testimonials_2,
    'Footer_1': Footer_1
};

const StringToComponent = ({ componentName }) => {
  // Get the corresponding React component based on the componentName
  const ComponentToRender = componentMap[componentName];

  if (!ComponentToRender) {
    // Handle the case when the component is not found
    return <div>Component not found</div>;
  }

  // Render the dynamically chosen component
  return <ComponentToRender />;
};

export default StringToComponent;