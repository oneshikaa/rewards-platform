import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const location = useLocation();
  const points = useSelector((state) => state.rewards.points);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-primary">RewardsApp</span>
              </Link>
              
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === '/' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/rewards"
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === '/rewards' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Rewards
                </Link>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">{points} Points</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;