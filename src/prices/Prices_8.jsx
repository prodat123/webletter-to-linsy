import React from 'react'

function Prices_8() {
    const tableItems = [
        {
            numberOfSessions: "4",
            totalPrice: "1.000.000",
            pricePerSession: "250.000",
        },
        {
            numberOfSessions: "8",
            totalPrice: "1.960.000",
            pricePerSession: "245.000",
        },
        {
            numberOfSessions: "16",
            totalPrice: "3.680.000",
            pricePerSession: "230.000",
        },
        {
            numberOfSessions: "24",
            totalPrice: "5.260.000",
            pricePerSession: "215.000",
        },
        {
            numberOfSessions: "36",
            totalPrice: "7.200.000",
            pricePerSession: "200.000",
        },
        {
            numberOfSessions: "48",
            totalPrice: "8.400.000",
            pricePerSession: "175.500",
        },
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Personal Trainer Presale Price (10%)
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left text-center text-xl">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr className="divide-x text-primary">
                                <th className="py-3 px-6"># of Sessions</th>
                                <th className="py-3 px-6">Total Price</th>
                                <th className="py-3 px-6">Price per Session</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                tableItems.map((item, idx) => (
                                    <tr key={idx} className="divide-x">
                                        <td className="px-6 py-4 whitespace-nowrap gap-x-6">
                                            {item.numberOfSessions} Sessions
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">Rp{item.totalPrice}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Rp{item.pricePerSession}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Prices_8