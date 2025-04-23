import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Government Services", href: "/government" },
  { name: "Healthcare", href: "/healthcare" },
  { name: "Community", href: "/community" },
  { name: "Tech Help", href: "/tech-help" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary">GuideUp</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors",
                  location.pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "lg:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="space-y-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  location.pathname === item.href && "text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
