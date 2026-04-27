'use client'

import { useState, useEffect } from 'react'
import { mockContentLogs as initialLogs, mockAccounts } from '@/lib/mock-data'
import { ContentLog } from '@/lib/types'
import StatsBar from '@/components/stats-bar'
import ContentCard from '@/components/content-card'
import StatusBadge from '@/components/status-badge'
import { Search, Filter, AlertCircle, CheckCircle2, LayoutGrid, List, Check, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

export default function Dashboard() {
  const [logs, setLogs] = useState<ContentLog[]>(initialLogs)
  const [selectedAccount, setSelectedAccount] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [pillarFilter, setPillarFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showToast, setShowToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null)

  const filteredLogs = logs.filter(log => {
    const matchesAccount = selectedAccount === 'all' || log.account_id === selectedAccount
    const matchesStatus = statusFilter === 'all' || log.status === statusFilter
    const matchesPillar = pillarFilter === 'all' || log.pillar === pillarFilter
    const matchesSearch = log.article_title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         log.caption_instagram.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesAccount && matchesStatus && matchesPillar && matchesSearch
  })

  const handleApprove = (id: string) => {
    setLogs(prev => prev.map(log => 
      log.id === id ? { ...log, status: 'approved', approved_at: new Date().toISOString() } : log
    ))
    triggerToast('Content approved ✓', 'success')
  }

  const handleReject = (id: string) => {
    // In a real app, this would show the modal
    const note = prompt('Enter rejection note:')
    if (note === null) return // Cancelled

    setLogs(prev => prev.map(log => 
      log.id === id ? { ...log, status: 'rejected', rejection_note: note } : log
    ))
    triggerToast('Content rejected ✗', 'error')
  }

  const handlePublish = (id: string) => {
    setLogs(prev => prev.map(log => 
      log.id === id ? { ...log, status: 'published', published_at: new Date().toISOString() } : log
    ))
    triggerToast('Content published ↑', 'success')
  }

  const triggerToast = (message: string, type: 'success' | 'error') => {
    setShowToast({ message, type })
    setTimeout(() => setShowToast(null), 3000)
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      <StatsBar 
        logs={logs} 
        accounts={mockAccounts} 
        selectedAccountId={selectedAccount} 
        onAccountChange={setSelectedAccount} 
      />

      <div className="flex flex-col gap-6">
        {/* Filters */}
        <div className="bg-bg-panel border border-border p-4 rounded-2xl flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {['all', 'pending', 'approved', 'rejected', 'published'].map((status) => {
              const count = logs.filter(l => status === 'all' || l.status === status).length
              return (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2",
                    statusFilter === status 
                      ? "bg-green text-white shadow-lg shadow-green/20" 
                      : "bg-bg-dark text-text-muted hover:text-text-primary border border-border"
                  )}
                >
                  {status}
                  <span className={cn(
                    "px-1.5 py-0.5 rounded-full text-[10px]",
                    statusFilter === status ? "bg-white/20" : "bg-white/5"
                  )}>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text"
                placeholder="Search content..."
                className="w-full bg-bg-dark border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 bg-bg-dark border border-border px-3 py-2 rounded-xl">
              <Filter className="w-4 h-4 text-text-muted" />
              <select 
                className="bg-transparent text-xs font-bold uppercase tracking-wider focus:outline-none"
                value={pillarFilter}
                onChange={(e) => setPillarFilter(e.target.value)}
              >
                <option value="all">All Pillars</option>
                <option value="UMKM">UMKM</option>
                <option value="Petani">Petani</option>
                <option value="Fakta">Fakta</option>
                <option value="Mitos">Mitos</option>
              </select>
            </div>

            <div className="flex items-center gap-1 bg-bg-dark border border-border p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-1.5 rounded-lg transition-all",
                  viewMode === 'grid' ? "bg-green text-white shadow-sm" : "text-text-muted hover:text-text-primary"
                )}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-1.5 rounded-lg transition-all",
                  viewMode === 'list' ? "bg-green text-white shadow-sm" : "text-text-muted hover:text-text-primary"
                )}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Display */}
        {filteredLogs.length > 0 ? (
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 lg:grid-cols-2 gap-6" 
              : "flex flex-col gap-3"
          )}>
            <AnimatePresence mode="popLayout">
              {filteredLogs.map((log) => (
                <motion.div
                  key={log.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {viewMode === 'grid' ? (
                    <ContentCard 
                      log={log} 
                      onApprove={handleApprove} 
                      onReject={handleReject} 
                      onPublish={handlePublish} 
                    />
                  ) : (
                    <div className="bg-bg-panel border border-border rounded-xl p-4 flex items-center gap-4 hover:border-green/30 transition-all group">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-bg-dark flex-shrink-0">
                        <img src={log.image_url} alt="" className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-text-muted">{log.account_handle}</span>
                          <StatusBadge variant={log.pillar}>{log.pillar}</StatusBadge>
                        </div>
                        <h3 className="font-heading font-bold text-sm truncate group-hover:text-green transition-colors">
                          {log.article_title}
                        </h3>
                        <p className="text-xs text-text-muted mt-1 truncate">
                          {log.source} • {new Date(log.date).toLocaleDateString('id-ID')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <StatusBadge variant={log.status}>{log.status}</StatusBadge>
                        
                        <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
                          {log.status === 'pending' ? (
                            <>
                              <button 
                                onClick={() => handleApprove(log.id)}
                                className="p-2 rounded-lg bg-green/10 text-green hover:bg-green hover:text-white transition-all"
                                title="Approve"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleReject(log.id)}
                                className="p-2 rounded-lg bg-red/10 text-red hover:bg-red hover:text-white transition-all"
                                title="Reject"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : log.status === 'approved' && (
                            <button 
                              onClick={() => handlePublish(log.id)}
                              className="p-2 rounded-lg bg-blue/10 text-blue hover:bg-blue hover:text-white transition-all"
                              title="Publish"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-bg-panel rounded-full flex items-center justify-center mb-4 border border-border">
              <AlertCircle className="w-10 h-10 text-text-muted" />
            </div>
            <h3 className="text-xl font-heading font-bold">No content found</h3>
            <p className="text-text-muted mt-2">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setStatusFilter('all'); setPillarFilter('all'); setSearchQuery(''); setSelectedAccount('all'); }}
              className="mt-6 text-green font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Custom Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
              "fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border backdrop-blur-md",
              showToast.type === 'success' ? "bg-green/90 text-white border-green-light/20" : "bg-red/90 text-white border-red/20"
            )}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold">{showToast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
