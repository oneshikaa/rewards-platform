import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const points = useSelector(state => state.rewards.points);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">RewardsApp</span>
            </Link>
            
            <div className="ml-10 flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-primary/10"
              >
                Dashboard
              </Link>
              <Link
                to="/rewards"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-primary/10"
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
  );
};

export default Navbar;