
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function LargeTextToggle() {
  const [isLargeText, setIsLargeText] = useState(false);
  
  useEffect(() => {
    // Check if preference is stored
    const storedPreference = localStorage.getItem('largeText');
    if (storedPreference) {
      const preference = JSON.parse(storedPreference);
      setIsLargeText(preference);
      if (preference) {
        document.documentElement.classList.add('large-text');
      }
    }
  }, []);
  
  const toggleLargeText = () => {
    const newValue = !isLargeText;
    setIsLargeText(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
    
    localStorage.setItem('largeText', JSON.stringify(newValue));
  };
  
  return (
    <Button 
      onClick={toggleLargeText}
      variant="outline"
      className="text-purple hover:text-purple-dark hover:bg-purple-light"
    >
      {isLargeText ? "Normal Text" : "Larger Text"}
    </Button>
  );
}
