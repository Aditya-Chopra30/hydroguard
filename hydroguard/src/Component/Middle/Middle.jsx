import React from 'react';
import image from './fireprotection.png';

const Middle = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <br/>
        <br/>
      {/* First Portion: What We Are Doing */}
      <section className="p-8 text-center w-full">
        <h1 className="text-3xl font-bold mb-4">Hydroguard : Fire safety is our top priority</h1>
        <p className="text-lg max-w-2xl mx-auto">
        HydroGuard proposed solution for forest fire prevention and control integrates various technologies 
and strategic measures to address the multifaceted challenges associated with forest fires. The 
solution is designed to be comprehensive, scalable, and adaptable to different geographical 
and environmental contexts. The key components of the proposed solution include:<br/>
<b>Water Level Monitoring:</b> Deploying advanced water level sensors in tanks and 
connecting them to a centralized monitoring system. These sensors will continuously measure 
and transmit real-time data on water levels, ensuring that firefighting teams have immediate 
access to up-to-date information. The centralized monitoring system will collect, analyze, and 
store the data, providing valuable insights for decision-making and planning.<br/>
<b>Comprehensive Database:</b> Establishing a detailed database of all nearby water 
bodies, including small ponds, government tanks, and commercial facilities with substantial 
water reserves. This database will be regularly updated to ensure its accuracy and reliability. 
The information in the database will include the location, capacity, and accessibility of each 
water body, as well as any additional relevant details. This comprehensive database will be 
easily accessible to firefighting teams and other relevant authorities, facilitating efficient 
planning and resource allocation.<br/>
<b>GIS and Routing Optimization:</b> Implementing GIS tools and sophisticated routing 
algorithms to analyze geographic data and determine the quickest and most efficient routes 
for firefighting teams to reach the fire-affected areas. The GIS system will incorporate realtime traffic data, terrain features, and potential obstacles to optimize response times. By 
providing detailed and accurate routing information, the system will enable firefighting teams 
to reach the fire areas more quickly and efficiently, thereby reducing the spread and severity 
of fires.<br/>
<b>Communication Network:</b> Ensuring seamless communication among all components 
of the system, including sensors, monitoring centers, and firefighting teams. A reliable 
communication network is essential for real-time updates, coordination, and effective 
decision-making during fire emergencies. The communication network will facilitate the 
transmission of data, alerts, and instructions, ensuring that all relevant parties are informed 
and able to respond promptly.

        </p>
      </section>


      {/* Third Portion: Image */}
      <section className="p-8 flex justify-center items-center w-full">
        <img 
          src={image} 
          alt="Descriptive Alt Text" 
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </section>
    </div>
  );
};

export default Middle;
