'use client'

import { ContentLog, Account } from '@/lib/types'
import { CheckCircle, Clock, Send, XCircle, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsBarProps {
  logs: ContentLog[]
  accounts: Account[]
  selectedAccountId: string
  onAccountChange: (id: string) => void
}

export default function StatsBar({ 
  logs = [], 
  accounts = [], 
  selectedAccountId, 
  onAccountChange 
}: StatsBarProps) {
  const filteredLogs = selectedAccountId === 'all' 
    ? logs 
    : logs.filter(l => l.account_id === selectedAccountId)

  const stats = {
    total: filteredLogs.length,
    pending: filteredLogs.filter(l => l.status === 'pending').length,
    approved: filteredLogs.filter(l => l.status === 'approved').length,
    published: filteredLogs.filter(l => l.status === 'published').length,
  }

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-heading font-bold">Content Dashboard</h1>
        
        <div className="flex items-center gap-2 bg-bg-panel border border-border p-1.5 rounded-xl">
          <Filter className="w-4 h-4 text-text-muted ml-2" />
          <select 
            className="bg-transparent text-sm font-medium focus:outline-none pr-4"
            value={selectedAccountId}
            onChange={(e) => onAccountChange(e.target.value)}
          >
            <option value="all">All Accounts</option>
            {accounts?.map(acc => (
              <option key={acc.id} value={acc.id}>{acc.handle}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Content', value: stats.total, icon: BarChart3, color: 'text-text-primary', bg: 'bg-white/5' },
          { label: 'Pending Approval', value: stats.pending, icon: Clock, color: 'text-gold', bg: 'bg-gold/10', highlight: stats.pending > 0 },
          { label: 'Approved', value: stats.approved, icon: CheckCircle, color: 'text-green-light', bg: 'bg-green-light/10' },
          { label: 'Published', value: stats.published, icon: Send, color: 'text-blue', bg: 'bg-blue/10' },
        ].map((stat, i) => (
          <div 
            key={i} 
            className={cn(
              "p-5 rounded-2xl border border-border transition-all duration-300",
              stat.bg,
              stat.highlight && "ring-2 ring-gold/50 border-gold/50 shadow-lg shadow-gold/5"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">{stat.label}</span>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div className="text-3xl font-heading font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { BarChart3 } from 'lucide-react'
