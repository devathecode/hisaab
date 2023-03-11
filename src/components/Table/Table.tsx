import React, {useEffect, useState} from 'react';

const Table = () => {
    const [data, setData] = useState([]);
    const [totalSpendAfterFilter, setTotalSpendAfterFilter] = useState(0);

    useEffect(() => {
        getDataFromStorage();
    }, [])
    const getDataFromStorage = () => {
        console.log('JSON.parse(localStorage.getItem(\'myData\') || \'[]\')', JSON.parse(localStorage.getItem('myData') || '[]'))
        setData(JSON.parse(localStorage.getItem('myData') || '[]'));
    }
    const [filters, setFilters] = useState({
        expenseName: '',
        expenseDesc: '',
        expenseType: '',
        amount: '',
        sendTo: ''
    });

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(
        (d: any) =>
            d.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.expenseDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.expenseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.sendTo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <h1 className="text-3xl font-mono tracking-wider font-bold">Expense Table</h1>
                </div>
                <div className="col-span-4">
                    <input
                        type="text"
                        className="w-full px-3 py-2 mb-3 border rounded-lg"
                        placeholder="Filter your expenses here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Expense
                            Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Expense
                            Type
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Phone number</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Amount</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Recipient
                            Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((element: any) => {
                        return <tr className="hover:bg-gray-100 text-center" key={element.expenseName}>
                            <td className="p-3 border border-gray-300">{element.expenseName}</td>
                            <td className="p-3 border border-gray-300">{element.expenseType}</td>
                            <td className="p-3 border border-gray-300">{element.date}</td>
                            <td className="p-3 border border-gray-300">{element.number}</td>
                            <td className="p-3 border border-gray-300">{element.amount}</td>
                            <td className="p-3 border border-gray-300">{element.sendTo}</td>
                            <td className="p-3 border border-gray-300">{element.expenseDesc}</td>
                        </tr>
                    })}
                    {/* Add more rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;