"use client"

import { motion } from 'framer-motion'
import { Brain as Train, Users, Calendar, Settings } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent">
            Welcome to Kochi Metro Dashboard
          </h1>
          <p className="text-white/70">Smart Induction Planner - Supervisor Portal</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Train, title: 'Active Trains', value: '24', color: 'blue' },
            { icon: Users, title: 'Employees', value: '156', color: 'purple' },
            { icon: Calendar, title: 'Scheduled Inductions', value: '12', color: 'violet' },
            { icon: Settings, title: 'System Status', value: 'Online', color: 'green' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
            >
              <item.icon className="mb-4 h-8 w-8 text-white/80" />
              <h3 className="mb-2 text-sm text-white/70">{item.title}</h3>
              <p className="text-3xl font-bold text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">Recent Activity</h2>
          <p className="text-white/70">Dashboard content will be displayed here...</p>
        </motion.div>
      </div>
    </div>
  )
}
