import React from 'react'

export default function IncomeExpense() {
    return (
        <div className="flex justify-around items-center w-full flex-col lg:flex-row py-10">
            <div className="flex flex-row justify-between  mb-5 lg:mb-0"> 
                  <h1 className ="text-4xl pr-4">
                        Income 
                      </h1>
                 <p className="text-green-700 text-4xl font-serif">$500</p>
            </div>
            <div className="flex flex-row justify-between">
                  <h1 className ="text-4xl pr-4">
                     Expense 
                   </h1>
                 <p className="text-red-700 text-4xl font-serif">$400</p>
            </div>
    </div>
    )
}
