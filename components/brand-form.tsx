'use client'

import { useState } from 'react'
import { Instagram, Music2, Globe, Palette, Target, Calendar, Info, X, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BrandForm({ onCancel, onSave }: { onCancel: () => void, onSave: (data: any) => void }) {
  const [platform, setPlatform] = useState<'instagram' | 'tiktok' | 'both'>('both')
  const [colors, setColors] = useState({ primary: '#1A6B4A', accent: '#C47B1A', background: '#0D1B2A' })

  return (
    <div className="bg-bg-panel border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
      <div className="p-6 border-b border-border flex items-center justify-between bg-white/5">
        <div>
          <h2 className="text-xl font-heading font-bold">Brand Identity Manager</h2>
          <p className="text-xs text-text-muted mt-1">Configure your brand voice, sources, and visual identity.</p>
        </div>
        <button onClick={onCancel} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-12">
        {/* Section 1: Account Info */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Info className="w-5 h-5 text-green" />
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Section 1 — Account Info</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Account Handle</label>
              <input type="text" placeholder="@brand_id" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Platform</label>
              <div className="flex bg-bg-dark border border-border rounded-xl p-1">
                {(['instagram', 'tiktok', 'both'] as const).map((p) => (
                  <button 
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={cn(
                      "flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all",
                      platform === p ? "bg-green text-white" : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: News Source */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Globe className="w-5 h-5 text-blue" />
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Section 2 — News Source</h3>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                Niche / Search Query
                <span className="text-[10px] lowercase font-normal text-text-muted">(Used for NewsAPI)</span>
              </label>
              <input type="text" placeholder="e.g. MBG OR Makan Bergizi Gratis" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Domains to search</label>
                <input type="text" placeholder="antaranews.com, republika.co.id" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Negative Keywords</label>
                <input type="text" placeholder="politik, kriminal, kecelakaan" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Identity */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Target className="w-5 h-5 text-gold" />
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Section 3 — Brand Identity</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Brand Name</label>
                <input type="text" placeholder="Dari Ladang" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Language</label>
                <select className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50">
                  <option>Indonesian</option>
                  <option>English</option>
                  <option>Both</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Tone of Voice</label>
              <textarea placeholder="e.g. Edukatif, Menginspirasi, Santai" className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 min-h-[80px]" />
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Brand Documentation</label>
              <div className="flex flex-col gap-4">
                <textarea placeholder="Paste full brand document text here..." className="w-full bg-bg-dark border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 min-h-[150px]" />
                <div className="flex items-center gap-4">
                  <div className="h-px bg-border flex-1" />
                  <span className="text-[10px] font-bold uppercase text-text-muted">OR UPLOAD</span>
                  <div className="h-px bg-border flex-1" />
                </div>
                <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-text-muted group-hover:text-green transition-colors mb-2" />
                  <p className="text-sm font-bold">Click to upload brand document</p>
                  <p className="text-[10px] text-text-muted mt-1">PDF or DOCX (Max 10MB) • Stored in Google Drive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Brand Colors */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Palette className="w-5 h-5 text-purple" />
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Section 4 — Brand Colors</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { label: 'Primary', id: 'primary' },
                { label: 'Accent', id: 'accent' },
                { label: 'Background', id: 'background' },
              ].map((c) => (
                <div key={c.id} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{c.label} Color</label>
                  <div className="flex gap-2">
                    <input 
                      type="color" 
                      value={colors[c.id as keyof typeof colors]} 
                      onChange={(e) => setColors({...colors, [c.id]: e.target.value})}
                      className="w-12 h-12 rounded-xl bg-bg-dark border border-border p-1 cursor-pointer" 
                    />
                    <input 
                      type="text" 
                      value={colors[c.id as keyof typeof colors]} 
                      onChange={(e) => setColors({...colors, [c.id]: e.target.value})}
                      className="flex-1 bg-bg-dark border border-border rounded-xl px-4 text-xs font-mono uppercase focus:outline-none focus:ring-2 focus:ring-green/50" 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted block">Live Palette Preview</label>
              <div className="grid grid-cols-1 gap-4 h-full">
                <div 
                  className="rounded-2xl p-8 border border-white/10 flex flex-col gap-4 shadow-2xl"
                  style={{ backgroundColor: colors.background }}
                >
                  <div 
                    className="w-1/2 h-4 rounded-full" 
                    style={{ backgroundColor: colors.primary }} 
                  />
                  <div 
                    className="w-3/4 h-4 rounded-full opacity-50" 
                    style={{ backgroundColor: colors.primary }} 
                  />
                  <div className="mt-auto flex gap-3">
                    <div 
                      className="px-6 py-2 rounded-xl font-bold text-xs" 
                      style={{ backgroundColor: colors.primary, color: '#fff' }}
                    >
                      Button
                    </div>
                    <div 
                      className="px-6 py-2 rounded-xl font-bold text-xs border" 
                      style={{ borderColor: colors.accent, color: colors.accent }}
                    >
                      Outline
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Content Strategy */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Calendar className="w-5 h-5 text-teal" />
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Section 5 — Content Strategy</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Content Pillars</label>
              <div className="flex flex-wrap gap-2 p-3 bg-bg-dark border border-border rounded-xl min-h-[100px] align-top">
                {['UMKM', 'Petani', 'Fakta', 'Mitos'].map(p => (
                   <span key={p} className="bg-green/10 text-green border border-green/20 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-2">
                     {p} <X className="w-3 h-3 cursor-pointer" />
                   </span>
                ))}
                <input type="text" placeholder="Add pillar..." className="bg-transparent border-none focus:outline-none text-xs ml-2 w-20" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Mandatory Hashtags</label>
              <div className="flex flex-wrap gap-2 p-3 bg-bg-dark border border-border rounded-xl min-h-[100px] align-top">
                {['#LokalBanget', '#PanganLokal'].map(h => (
                   <span key={h} className="bg-blue/10 text-blue border border-blue/20 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-2">
                     {h} <X className="w-3 h-3 cursor-pointer" />
                   </span>
                ))}
                <input type="text" placeholder="Add hashtag..." className="bg-transparent border-none focus:outline-none text-xs ml-2 w-20" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-border bg-white/5 flex justify-end gap-3">
        <button 
          onClick={onCancel}
          className="px-8 py-3 rounded-xl font-bold text-sm text-text-muted hover:text-text-primary hover:bg-white/5 transition-all"
        >
          Cancel
        </button>
        <button 
          onClick={() => onSave({})}
          className="px-8 py-3 rounded-xl font-bold text-sm bg-green text-white hover:bg-green-light transition-all shadow-lg shadow-green/10"
        >
          Save Account
        </button>
      </div>
    </div>
  )
}
