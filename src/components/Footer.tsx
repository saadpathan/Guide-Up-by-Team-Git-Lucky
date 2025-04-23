
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-light py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-dark mb-4">DigitalBridge</h2>
            <p className="text-gray">
              Helping everyone access digital resources easily.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/government" className="text-gray hover:text-purple">Government Services</Link></li>
              <li><Link to="/healthcare" className="text-gray hover:text-purple">Healthcare</Link></li>
              <li><Link to="/community" className="text-gray hover:text-purple">Community Events</Link></li>
              <li><Link to="/tech-help" className="text-gray hover:text-purple">Technology Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-3">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/tech-help#basics" className="text-gray hover:text-purple">Computer Basics</Link></li>
              <li><Link to="/tech-help#internet" className="text-gray hover:text-purple">Internet Skills</Link></li>
              <li><Link to="/tech-help#email" className="text-gray hover:text-purple">Email Assistance</Link></li>
              <li><Link to="/tech-help#safety" className="text-gray hover:text-purple">Online Safety</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-3">Contact</h3>
            <p className="text-gray mb-2">Need Help? Call Us:</p>
            <p className="text-purple font-bold text-xl mb-3">1-800-555-HELP</p>
            <p className="text-gray">Available Monday-Friday</p>
            <p className="text-gray">9:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray">
          <p className="text-center text-gray">
            © {new Date().getFullYear()} DigitalBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
