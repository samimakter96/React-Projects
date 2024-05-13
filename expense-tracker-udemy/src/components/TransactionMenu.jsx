import React, { useState } from 'react';

function TransactionMenu({ onIncome, onExpense }) {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([])
  const [amount, setAmount] = useState()
  const [title, setTitle] = useState('')
  const [transactionType, setTransactionType] = useState('expense')

  const toggleButton = () => {
    setMenu(!menu);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const info = {
      id: data.length + 1,
      amount: amount,
      title: title,
      transactionType: transactionType
    }

    if (!amount || !title) {
      alert('Please fill Amount and Title that are required for transactions')
    }
    if (transactionType === 'income') {
      onIncome(Number(amount))
    } else {
      onExpense(Number(amount))
    }

    setData((prevData) => [...prevData, info])
    setAmount('')
    setTitle('')
    setTransactionType('expense')
    setMenu(false)

  }

  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <button
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-200 mb-6"
          onClick={toggleButton}
        >
          Add Transaction
        </button>
      </div>

      {menu && (
        <div className="flex item-center">
          <div className="flex flex-col text-black gap-2">
            <input
              type="number"
              required
              placeholder="Enter an amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 border rounded-lg border-black placeholder:text-gray-700"
            />
            <input
              type="text"
              required
              placeholder="Enter expense title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border rounded-lg border-black placeholder:text-gray-700"
            />

            <select
              className="p-2 border rounded-lg"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <button className='bg-black text-white mb-2 p-2 rounded-lg hover:bg-gray-700 mt-4' onClick={handleSubmit}>Add</button>
          </div>
        </div>
      )}
      {data.length > 0 && data.map((item) => <div className='flex'>
        <div className={`flex w-[200px] justify-between flex-row text-white gap-4 mb-2 p-2 font-bold rounded-md ${item.transactionType === 'expense' ? 'bg-red-500' : 'bg-green-700'}`}>
          <p>{item.title}</p>
          <p>{item.amount}</p>
        </div>
      </div>)}
    </div>
  );
}

export default TransactionMenu;
