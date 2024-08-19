import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-2">Company</h2>
            <ul className="list-none">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-2">Services</h2>
            <ul className="list-none">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>service 3</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-2">FOLLOW US</h2>
            <ul className="list-none">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
