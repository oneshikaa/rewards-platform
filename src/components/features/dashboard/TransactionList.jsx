import { useSelector } from 'react-redux';
import { formatDate } from '../../../utils/formatters';

const TransactionList = () => {
  const transactions = useSelector(state => state.rewards.transactions);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 text-gray-600">Date</th>
              <th className="text-left p-2 text-gray-600">Type</th>
              <th className="text-left p-2 text-gray-600">Points</th>
              <th className="text-left p-2 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 10).map(transaction => (
              <tr key={transaction.id} className="border-b">
                <td className="p-2">
                  {formatDate(transaction.date)}
                </td>
                <td className="p-2 capitalize">{transaction.type}</td>
                <td className={`p-2 ${
                  transaction.type === 'earn' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {transaction.type === 'earn' ? '+' : '-'}
                  {transaction.points}
                </td>
                <td className="p-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;