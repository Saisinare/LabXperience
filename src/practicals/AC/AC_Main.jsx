import React, { useState } from 'react';
import Navigation from '../../Navigation';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function AC_Main() {
  // State to track the selected menu item
  const [activeContent, setActiveContent] = useState('Introduction');

  // Function to render content based on selected menu item
  const renderContent = () => {
    switch (activeContent) {
      case 'Introduction':
        return (<div>
          <h1 className=' font-bold text-3xl mb-9'>Introduction to Analog Circuits</h1>
          Analog circuits are the cornerstone of modern electronics, focusing on the manipulation and processing of continuous signals. Unlike digital circuits, which deal with discrete states (0s and 1s), analog circuits operate over a range of values, making them ideal for applications such as audio processing, sensor data acquisition, and power management.

          This course introduces students to key components like resistors, capacitors, transistors, and operational amplifiers (Op-Amps). Through a blend of theoretical concepts and practical experiments, students will explore how these components are used to build amplifiers, filters, oscillators, and other essential devices in communication and control systems. By the end of this course, students will gain a strong foundation in designing, analyzing, and troubleshooting analog circuits, preparing them for advanced topics in electronics and real-world applications.
        </div>);
      case 'Objectives':
        return <div>
          <h1 className=' font-bold text-3xl mb-9'>Objectives</h1>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Understand the fundamental components of analog circuits, including resistors, capacitors, inductors, and transistors.</li>
            <li>Analyze the operation of key analog circuits such as amplifiers, filters, and oscillators.</li>
            <li>Develop skills in designing analog circuits for signal processing, amplification, and filtering.</li>
            <li>Use simulation tools to model and test circuit designs.</li>
            <li>Explore the frequency response and performance of circuits in relation to real-world applications.</li>
            <li>Learn practical troubleshooting techniques for identifying issues in circuit designs.</li>
            <li>Build a foundation for more advanced topics in electronics, such as communication systems and power electronics.</li>
          </ul>
        </div>;
      case 'List of Experiments':
        return (<div>
                <h1 className=' font-bold text-3xl mb-9'>List of Experiments</h1>
                <Link to={"/lab/AC/EX1"}>
                <div className=' w-full h-28 border mb-3 rounded-lg shadow flex items-center px-5'>
                <h1 className=' font-bold text-lg flex text-blue-gray-800'>1. MOSFET Amplifier </h1>
                </div>
                </Link>


                <Link to={"/lab/AC/EX1"}>
                <div className=' w-full h-28 border mb-3 rounded-lg shadow flex items-center px-5'>
                <h1 className=' font-bold  text-lg flex text-blue-gray-800'>2. Operational Amplifiers </h1>
                </div>
                </Link>


          </div>);
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div>
      <Navigation />
      <div className='pt-20 border h-screen flex'>
        <Sidebar>
          <Menu>
            <MenuItem onClick={() => setActiveContent('Introduction')}>Introduction</MenuItem>
            <MenuItem onClick={() => setActiveContent('Objectives')}>Objectives</MenuItem>
            <MenuItem onClick={() => setActiveContent('List of Experiments')}>List of Experiments</MenuItem>
          </Menu>
        </Sidebar>

        <div className='h-full border p-4 flex-1'>
          {/* Dynamic content will be displayed here */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
