'use client'

import { useState } from 'react'
import { mockAccounts as initialAccounts } from '@/lib/mock-data'
import { Account } from '@/lib/types'
import { Plus, Instagram, Music2, Edit2, Trash2, ExternalLink, Activity, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import StatusBadge from '@/components/status-badge'
import BrandForm from '@/components/brand-form'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts)
  const [showModal, setShowModal] = useState(false)
  const [editingAccount, setEditingAccount] = useState<Account | null>(null)

  const handleSave = (data: any) => {
    // In a real app, this would be an API call
    setShowModal(false)
    setEditingAccount(null)
    alert('Account saved locally ✓')
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold">Brand Accounts</h1>
          <p className="text-text-muted mt-1">Manage your brand identities and content strategies.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green text-white px-6 py-3 rounded-xl font-bold hover:bg-green-light transition-all shadow-lg shadow-green/10"
        >
          <Plus className="w-5 h-5" /> Add Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc) => (
          <div key={acc.id} className="bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col card-hover">
            {/* ... card content remains same ... */}
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-bg-dark rounded-xl border border-white/5 flex items-center justify-center text-xl font-bold text-green">
                  {acc.handle.charAt(1).toUpperCase()}
                </div>
                <div className="flex gap-2">
                  {(acc.platform === 'instagram' || acc.platform === 'both') && <Instagram className="w-5 h-5 text-purple" />}
                  {(acc.platform === 'tiktok' || acc.platform === 'both') && <Music2 className="w-5 h-5 text-blue" />}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold">{acc.brand_name}</h3>
              <p className="text-text-muted text-sm font-medium">{acc.handle}</p>
            </div>

            <div className="p-6 flex-1 space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">Brand Colors</p>
                <div className="flex gap-3">
                  <div className="group relative">
                    <div className="w-8 h-8 rounded-full border border-white/10" style={{ backgroundColor: acc.brand_colors.primary }} />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Primary</span>
                  </div>
                  <div className="group relative">
                    <div className="w-8 h-8 rounded-full border border-white/10" style={{ backgroundColor: acc.brand_colors.accent }} />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Accent</span>
                  </div>
                  <div className="group relative">
                    <div className="w-8 h-8 rounded-full border border-white/10" style={{ backgroundColor: acc.brand_colors.background }} />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">BG</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">Content Pillars</p>
                <div className="flex flex-wrap gap-2">
                  {acc.content_pillars.map(pillar => (
                    <StatusBadge key={pillar} variant={pillar as any}>{pillar}</StatusBadge>
                  ))}
                </div>
              </div>

              <div className="bg-bg-dark/50 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">Status</span>
                  <span className={cn("font-bold flex items-center gap-1.5", acc.active ? "text-green-light" : "text-red")}>
                    <div className={cn("w-1.5 h-1.5 rounded-full", acc.active ? "bg-green-light animate-pulse" : "bg-red")} />
                    {acc.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">Niche Query</span>
                  <span className="text-text-primary font-mono bg-bg-dark px-1.5 py-0.5 rounded italic truncate max-w-[120px]">{acc.niche}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border bg-white/5 flex gap-2">
              <button 
                onClick={() => { setEditingAccount(acc); setShowModal(true); }}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 text-text-primary border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red/10 text-red border border-red/20 text-xs font-bold hover:bg-red/20 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}

        <button 
          onClick={() => setShowModal(true)}
          className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 text-text-muted hover:border-green/50 hover:text-green transition-all group min-h-[400px]"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-green/10 transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-bold">Add Brand Account</span>
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl z-10"
            >
              <BrandForm 
                onCancel={() => setShowModal(false)} 
                onSave={handleSave} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
