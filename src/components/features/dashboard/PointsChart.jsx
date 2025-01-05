import { useSelector } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { formatDate } from '../../../utils/formatters';

const PointsChart = () => {
  const transactions = useSelector(state => state.rewards.transactions);

  // Process data for chart
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Points History</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              stroke="#888"
            />
            <YAxis stroke="#888" />
            <Tooltip
              formatter={(value) => [`${value} points`, 'Points']}
              labelFormatter={formatDate}
            />
            <Line
              type="monotone"
              dataKey="points"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: '#4F46E5' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PointsChart;