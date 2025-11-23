import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, ArrowUpRight, ArrowDownLeft, CreditCard, Banknote } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';

export default function WalletPage() {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wallet & Payments</h1>
          <p className="text-gray-500">Manage your funds and transactions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowDownLeft size={16} /> Withdraw
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2">
            <Plus size={16} /> Add Funds
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-lg col-span-1 md:col-span-2">
           <p className="text-emerald-100 mb-1">Total Balance</p>
           <h2 className="text-4xl font-bold mb-8">₦ 2,450,000.00</h2>
           
           <div className="flex gap-8">
              <div>
                 <p className="text-emerald-200 text-xs uppercase tracking-wider mb-1">Account Holder</p>
                 <p className="font-medium">John Doe</p>
              </div>
              <div>
                 <p className="text-emerald-200 text-xs uppercase tracking-wider mb-1">Account Number</p>
                 <p className="font-medium">**** **** **** 4582</p>
              </div>
           </div>
        </div>

        <StatCard 
           title="Monthly Spending"
           value="₦ 450,000"
           trend="5% vs last month"
           trendUp={false}
           color="blue"
           icon={<Banknote size={20} />}
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
           <h3 className="font-bold text-gray-900">Recent Transactions</h3>
           <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="divide-y divide-gray-100">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {i % 2 === 0 ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                   </div>
                   <div>
                      <p className="font-medium text-gray-900">{i % 2 === 0 ? 'Payment to Artisan' : 'Wallet Deposit'}</p>
                      <p className="text-xs text-gray-500">Nov {20 - i}, 2025</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className={`font-medium ${i % 2 === 0 ? 'text-gray-900' : 'text-green-600'}`}>
                      {i % 2 === 0 ? '-' : '+'} ₦ {i * 25000}
                   </p>
                   <p className="text-xs text-gray-400">{i % 2 === 0 ? 'Completed' : 'Success'}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

