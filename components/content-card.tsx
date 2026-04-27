'use client'

import { useState } from 'react'
import { ContentLog } from '@/lib/types'
import StatusBadge from './status-badge'
import { Check, X, Send, ExternalLink, ChevronDown, ChevronUp, Instagram, Music2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface ContentCardProps {
  log: ContentLog
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onPublish: (id: string) => void
}

export default function ContentCard({ log, onApprove, onReject, onPublish }: ContentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSlides, setShowSlides] = useState(false)

  const truncatedCaption = log.caption_instagram.length > 100 
    ? log.caption_instagram.substring(0, 100) + '...' 
    : log.caption_instagram

  return (
    <div className="bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col card-hover">
      <div className="p-4 flex flex-wrap gap-2 items-center border-b border-border bg-white/5">
        <span className="text-xs font-bold text-text-primary mr-2">{log.account_handle}</span>
        <StatusBadge variant={log.pillar}>{log.pillar}</StatusBadge>
        <StatusBadge variant={log.status}>{log.status}</StatusBadge>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-4">
        <div>
          <a 
            href={log.article_url} 
            target="_blank" 
            className="text-lg font-heading font-bold leading-tight hover:text-green transition-colors flex items-start gap-2 group"
          >
            {log.article_title}
            <ExternalLink className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
          <p className="text-xs text-text-muted mt-2">
            {log.source} • {new Date(log.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden bg-bg-dark border border-border relative group">
          <img 
            src={log.image_url} 
            alt={log.article_title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <StatusBadge variant="default" className="bg-black/60 backdrop-blur-md">Visual Prompt Preview</StatusBadge>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-bg-dark/50 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Instagram className="w-4 h-4 text-purple" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Instagram Caption</span>
            </div>
            <p className="text-sm text-text-primary leading-relaxed">
              {isExpanded ? log.caption_instagram : truncatedCaption}
            </p>
            {log.caption_instagram.length > 100 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-green text-xs font-bold mt-2 hover:underline"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>

          <div className="bg-bg-dark/50 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Music2 className="w-4 h-4 text-blue" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">TikTok Caption</span>
            </div>
            <p className="text-sm text-text-primary leading-relaxed italic">
              "{log.caption_tiktok}"
            </p>
          </div>

          <p className="text-[10px] text-text-muted font-mono leading-tight">
            {log.hashtags}
          </p>
        </div>

        <div>
          <button 
            onClick={() => setShowSlides(!showSlides)}
            className="w-full flex items-center justify-between p-3 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors"
          >
            SLIDES PREVIEW ({log.slides.length})
            {showSlides ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          <AnimatePresence>
            {showSlides && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 space-y-2">
                  {log.slides.map((slide, i) => (
                    <div key={i} className="text-xs p-3 rounded-lg bg-bg-dark border border-white/5 flex gap-3">
                      <div className="w-5 h-5 rounded bg-green/20 text-green flex items-center justify-center flex-shrink-0 font-bold">
                        {slide.slide_number}
                      </div>
                      <div>
                        <span className="font-bold text-green mr-2">{slide.function}:</span>
                        <span className="text-text-primary">{slide.text}</span>
                        <p className="text-[10px] text-text-muted mt-1 italic">Illustration: {slide.illustration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="p-4 border-t border-border bg-white/5 grid grid-cols-2 gap-3">
        {log.status === 'pending' ? (
          <>
            <button 
              onClick={() => onApprove(log.id)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green text-white font-bold text-sm hover:bg-green-light transition-colors shadow-lg shadow-green/10"
            >
              <Check className="w-4 h-4" /> Approve
            </button>
            <button 
              onClick={() => onReject(log.id)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red/10 text-red border border-red/20 font-bold text-sm hover:bg-red/20 transition-colors"
            >
              <X className="w-4 h-4" /> Reject
            </button>
          </>
        ) : log.status === 'approved' ? (
          <>
            <button 
              onClick={() => onPublish(log.id)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue/10"
            >
              <Send className="w-4 h-4" /> Publish
            </button>
            <a 
              href={log.article_url}
              target="_blank"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-text-primary border border-white/10 font-bold text-sm hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Source
            </a>
          </>
        ) : (
          <a 
            href={log.article_url}
            target="_blank"
            className="col-span-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-text-primary border border-white/10 font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> View Original Source
          </a>
        )}
      </div>
    </div>
  )
}
