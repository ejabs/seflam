import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-2" : "bg-background py-4 "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-seflam-orange dark:text-seflam-orange">
              SEFLAM SGL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ">
            <nav className="flex items-center space-x-1 mr-4">
              <Link
                to="/"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                About Us
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-blue hover-effect flex items-center"
                  >
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/services#engineering" className="w-full">
                      Engineering
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#procurement" className="w-full">
                      Procurement
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#construction" className="w-full">
                      Construction
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/services#offshore-installation"
                      className="w-full"
                    >
                      Offshore Installation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/services#onshore-installation"
                      className="w-full"
                    >
                      Onshore Installation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#asset-management" className="w-full">
                      Asset Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#pipeline" className="w-full">
                      Pipeline & Hot Taps
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#laser-scanning" className="w-full">
                      Laser Scanning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services#fabrication" className="w-full">
                      Fabrication
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-blue hover-effect flex items-center"
                  >
                    Galleries <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/galleries/hot-tap" className="w-full">
                      Hot Tap Gallery
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/galleries/qpdup" className="w-full">
                      QPDUP Gallery
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/galleries/miscellaneous" className="w-full">
                      Miscellaneous Gallery
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/qhse"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                QHSE
              </Link>
              <Link
                to="/nigerian-content"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                Nigerian Content
              </Link>
              <Link
                to="/careers"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange hover-effect"
              >
                Contact
              </Link>
            </nav>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Prevent scrolling when menu is open */}
          <style
            dangerouslySetInnerHTML={{ __html: `body { overflow: hidden; }` }}
          />

          <div className="lg:hidden shadow-lg h-[100dvh] bg-black/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
            {/* Close button (only addition) */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-white hover:text-seflam-orange focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3 mt-8">
                <Link
                  to="/"
                  className="py-2 text-foreground text-white hover:text-seflam-orange dark:hover:text-seflam-orange"
                  onClick={toggleMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="py-2 text-foreground text-white hover:text-seflam-blue dark:hover:text-seflam-orange"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>

                <div className="py-2">
                  <div
                    className="flex justify-between items-center cursor-pointer text-foreground text-white"
                    onClick={() => {
                      const el = document.getElementById(
                        "mobileServicesDropdown"
                      );
                      if (el) el.classList.toggle("hidden");
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div
                    id="mobileServicesDropdown"
                    className="hidden ml-4 mt-2 space-y-2"
                  >
                    <Link
                      to="/services#engineering"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange text-white"
                      onClick={toggleMenu}
                    >
                      Engineering
                    </Link>
                    <Link
                      to="/services#procurement"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Procurement
                    </Link>
                    <Link
                      to="/services#construction"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Construction
                    </Link>
                    <Link
                      to="/services#offshore-installation"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Offshore Installation
                    </Link>
                    <Link
                      to="/services#onshore-installation"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Onshore Installation
                    </Link>
                    <Link
                      to="/services#asset-management"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Asset Management
                    </Link>
                    <Link
                      to="/services#pipeline"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Pipeline & Hot Taps
                    </Link>
                    <Link
                      to="/services#laser-scanning"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Laser Scanning
                    </Link>
                    <Link
                      to="/services#fabrication"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Fabrication
                    </Link>
                  </div>
                </div>

                <div className="py-2">
                  <div
                    className="flex justify-between items-center cursor-pointer text-foreground text-white"
                    onClick={() => {
                      const el = document.getElementById(
                        "mobileGalleriesDropdown"
                      );
                      if (el) el.classList.toggle("hidden");
                    }}
                  >
                    <span>Galleries</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div
                    id="mobileGalleriesDropdown"
                    className="hidden ml-4 mt-2 space-y-2"
                  >
                    <Link
                      to="/galleries/hot-tap"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Hot Tap Gallery
                    </Link>
                    <Link
                      to="/galleries/qpdup"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      QPDUP Gallery
                    </Link>
                    <Link
                      to="/galleries/miscellaneous"
                      className="block py-1 text-muted-foreground hover:text-seflam-blue dark:hover:text-seflam-orange"
                      onClick={toggleMenu}
                    >
                      Miscellaneous Gallery
                    </Link>
                  </div>
                </div>

                <Link
                  to="/qhse"
                  className="py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange text-white"
                  onClick={toggleMenu}
                >
                  QHSE
                </Link>
                <Link
                  to="/nigerian-content"
                  className="py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange text-white"
                  onClick={toggleMenu}
                >
                  Nigerian Content
                </Link>
                <Link
                  to="/careers"
                  className="py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange text-white"
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="py-2 text-foreground hover:text-seflam-blue dark:hover:text-seflam-orange text-white"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
