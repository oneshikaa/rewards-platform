import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { points, transactions } = useSelector((state) => state.rewards);

  // Prepare data for charts
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const chartData = last7Days.map(date => ({
    date,
    points: transactions
      .filter(t => t.date.startsWith(date))
      .reduce((acc, t) => acc + (t.type === 'earn' ? t.points : -t.points), 0)
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Rewards Dashboard</h1>
      
      {/* Points Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Points</h2>
          <p className="text-3xl font-bold text-primary">{points}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Points Earned (7d)</h2>
          <p className="text-3xl font-bold text-green-500">
            {transactions
              .filter(t => t.type === 'earn')
              .reduce((acc, t) => acc + t.points, 0)}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Points Spent (7d)</h2>
          <p className="text-3xl font-bold text-red-500">
            {transactions
              .filter(t => t.type === 'spend')
              .reduce((acc, t) => acc + t.points, 0)}
          </p>
        </div>
      </div>

      {/* Points Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Points Activity</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="points" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 10).map(transaction => (
                <tr key={transaction.id} className="border-b">
                  <td className="p-2">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="p-2 capitalize">{transaction.type}</td>
                  <td className={`p-2 ${transaction.type === 'earn' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type === 'earn' ? '+' : '-'}{transaction.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;