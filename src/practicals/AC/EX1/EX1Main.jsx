import React, { useState } from 'react';
import Navigation from '../../../Navigation';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

export default function EX1Main() {
    // State to track the selected sidebar item
    const [selectedContent, setSelectedContent] = useState('Aim');

    // Define content for each sidebar item
    const renderContent = () => {
        switch (selectedContent) {
            case 'Aim':
                return (
                    <div>
                        <div className=' text-2xl font-bold flex w-full items-center mb-5'>Aim</div>
                        <p>To obtain the frequency response of MOSFET amplifier in common source
                            configuration with given specifications.</p>
                    </div>
                );
            case 'Theory':
                return (
                    <div>
                        <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">The MOSFET Structure and Its Significance in Electronics</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                The <strong>Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)</strong> is a pivotal component in modern electronics, particularly in
                                <strong>Very Large Scale Integrated (VLSI)</strong> circuits. Due to its low power consumption, simple structure, and compact size, the MOSFET is ideal for high-density integration, especially in <strong>n-channel MOSFETs</strong> and <strong>Complementary Metal-Oxide-Semiconductor (CMOS)</strong> technologies.
                            </p>

                            <h3 className="text-2xl font-medium text-gray-800 mt-6 mb-4">Key Features of MOSFETs:</h3>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                                <li>
                                    <strong>High Input Impedance:</strong> This is a key advantage of MOSFET amplifiers, particularly in configurations like the common source and common drain, preventing the amplifier from loading the signal source. The high input impedance is regulated by the bias resistors <code>R1</code> and <code>R2</code>, typically chosen to be large enough to maintain proper biasing.
                                </li>
                                <li>
                                    <strong>Biasing for Amplification:</strong> For efficient amplification, MOSFETs need to be biased in their active region. The common source amplifier configuration is particularly popular due to its ability to amplify signals significantly, benefiting from the high input impedance without causing excessive loading on the signal source. However, caution is needed because overly large bias resistors can result in a significant voltage drop due to gate leakage current, which could destabilize the bias point.
                                </li>
                            </ul>

                            <p className="text-lg text-gray-700 mt-4">
                                In essence, the <strong>MOSFET's compact design, scalability, and power efficiency</strong> make it a foundational building block in modern VLSI technology, supporting the creation of high-performance integrated circuits across various applications.
                            </p>
                        </div>
                    </div>
                );
            case 'Procedure':
                return (
                    <div className="p-6 mx-auto bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Procedure</h2>

                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <span className="font-semibold">Circuit Setup:</span> Set up the circuit as shown in the provided diagram, ensuring all components are correctly connected. Apply an input signal of 0.2V peak-to-peak at a frequency of 1000Hz.
                            </li>
                            <li>
                                <span className="font-semibold">Initial Observation:</span> Observe the output waveform on the Cathode Ray Oscilloscope (CRO) to verify the signal is being amplified correctly.
                            </li>
                            <li>
                                <span className="font-semibold">Varying Frequency:</span> Gradually vary the frequency of the input signal over a range from 50Hz to a few MHz. Ensure that the signal is within the operational range of the circuit.
                            </li>
                            <li>
                                <span className="font-semibold">Frequency Response Measurement:</span> For each frequency, measure the gain of the circuit and record the values. Plot the frequency response, which is a graph showing the logarithmic frequency on the x-axis and the gain in decibels (dB) on the y-axis.
                            </li>
                            <li>
                                <span className="font-semibold">Analysis:</span> Examine the resulting graph to identify the frequency response characteristics of the circuit, noting any resonance or attenuation behavior.
                            </li>
                        </ol>
                    </div>
                );
            case 'Circuit Design and Technical Details':
                return (<div className="p-6 mx-auto bg-white shadow-lg rounded-lg">
                    <img src="/MOSFETcircuitDiagram.png" alt="" />
                    <img src="/screen1.png" alt="" />
                    <img src="/screen2.png" alt="" />
                </div>);
            case 'simulation':
                return (
                    <iframe
                        title="CircuitJS"
                        src="https://falstad.com/circuit/circuitjs.html"
                        width="100%"
                        height="600px"
                        style={{ border: "none" }}
                        allowFullScreen
                    />
                );
            default:
                return <p>Select an item from the sidebar.</p>;
        }
    };

    return (
        <div>
            <Navigation />
            <div className='pt-20 border h-screen flex'>
                {/* Sidebar */}
                <Sidebar className=' z-0'>
                    <Menu>
                        <MenuItem onClick={() => setSelectedContent('Aim')}>Aim</MenuItem>
                        <MenuItem onClick={() => setSelectedContent('Theory')}>Theory</MenuItem>
                        <MenuItem onClick={() => setSelectedContent('Procedure')}>Procedure</MenuItem>
                        <MenuItem onClick={() => setSelectedContent('Circuit Design and Technical Details')}>Circuit Design and Technical Details</MenuItem>
                        <MenuItem onClick={() => setSelectedContent('simulation')}>Simulation</MenuItem>
                    </Menu>
                </Sidebar>

                {/* Main content container */}
                <div className='p-4 w-full'>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
