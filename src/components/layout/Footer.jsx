const Footer = () => {
    return (
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-500">
              © {new Date().getFullYear()} RewardsApp. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;