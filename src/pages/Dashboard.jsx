import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import DashboardCards from '../components/DashboardCards'
import ChartSection from '../components/ChartSection'
import TransactionsTable from '../components/TransactionsTable'
import Insights from '../components/Insights'

const Dashboard = () => {
  return (
    <div className='flex bg-bg min-h-screen'>
        <Sidebar />

        <div className='flex-1 p-6'>
            <Header />

            <div className='mt-6 space-y-6'>
                <DashboardCards />
                <ChartSection />
                <TransactionsTable />
                <Insights />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
