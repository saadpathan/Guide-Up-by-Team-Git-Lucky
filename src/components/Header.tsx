
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold tracking-tight">GuideUp</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 py-4 border-t">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLinks mobile onClose={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false, onClose = () => {} }) {
  const links = [
    { name: "Home", path: "/" },
    { name: "Government Services", path: "/government" },
    { name: "Healthcare", path: "/healthcare" },
    { name: "Community", path: "/community" },
    { name: "Technology Help", path: "/tech-help" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`text-foreground hover:text-link-hover transition-colors ${
            mobile ? 'text-lg py-2' : 'font-medium'
          }`}
          onClick={onClose}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
