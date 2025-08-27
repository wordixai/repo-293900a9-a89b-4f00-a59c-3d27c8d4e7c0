import { ExternalLink } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="border-b border-[hsl(var(--tokyo-border))] bg-[hsl(var(--tokyo-dark))]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              alt="Tokyo AI Toolkit" 
              width="80" 
              height="20" 
              className="h-6 w-auto" 
              src="https://www.usetokyo.com/logo2.svg"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-[hsl(var(--tokyo-text))] hover:text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#tracking" 
              className="text-[hsl(var(--tokyo-text))] hover:text-white transition-colors"
            >
              AI Tracking
            </a>
            <a 
              href="#clients" 
              className="text-[hsl(var(--tokyo-text))] hover:text-white transition-colors"
            >
              Client Management
            </a>
            <a 
              href="https://www.npmjs.com/package/tokyo-ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--tokyo-text))] hover:text-white hover:opacity-80 transition-colors flex items-center gap-2"
            >
              <img 
                src="https://www.usetokyo.com/npm.png" 
                alt="Npm package" 
                className="h-10 w-10 invert"
              />
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="login-button cursor-pointer">
              Login
            </button>
            <button className="nav-button cursor-pointer">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;