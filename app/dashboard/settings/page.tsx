'use client'

import { useState } from 'react'
import { Save, Eye, EyeOff, Shield, Globe, Bell, Database, Webhook } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})

  const toggleKey = (key: string) => {
    setShowKeys(prev => ({ ...prev, [key]: !prev[key] }))
  }

  interface Field {
    label: string
    id: string
    type: string
    textarea?: boolean
    placeholder?: string
  }

  interface Section {
    id: string
    title: string
    icon: any
    description: string
    fields: Field[]
  }

  const sections: Section[] = [
    {
      id: 'integrations',
      title: 'API Integrations',
      icon: Shield,
      description: 'Connect your external services to power the automation.',
      fields: [
        { label: 'NewsAPI Key', id: 'newsapi', type: 'password' },
        { label: 'Gemini API Key', id: 'gemini', type: 'password' },
        { label: 'n8n Webhook URL', id: 'n8n', type: 'text' },
      ]
    },
    {
      id: 'google',
      title: 'Google Sheets & Drive',
      icon: Database,
      description: 'Configure where your content and brand documents are stored.',
      fields: [
        { label: 'Google Sheet ID', id: 'sheet_id', type: 'text' },
        { label: 'Google Service Account JSON', id: 'service_account', type: 'password', textarea: true },
      ]
    },
    {
      id: 'notifications',
      title: 'Notification Settings',
      icon: Bell,
      description: 'Choose how you want to be notified about new content.',
      fields: [
        { label: 'Approval Email', id: 'email', type: 'email', placeholder: 'approvals@brand.com' },
      ]
    }
  ]

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-bold">Settings</h1>
        <p className="text-text-muted mt-1">Configure your dashboard connections and preferences.</p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-bg-panel border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border bg-white/5">
              <div className="flex items-center gap-3 mb-1">
                <section.icon className="w-5 h-5 text-green" />
                <h2 className="text-lg font-heading font-bold">{section.title}</h2>
              </div>
              <p className="text-sm text-text-muted">{section.description}</p>
            </div>

            <div className="p-6 space-y-6">
              {section.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted block">
                    {field.label}
                  </label>
                  <div className="relative group">
                    {field.textarea ? (
                      <textarea 
                        className="w-full bg-bg-dark border border-border rounded-xl p-4 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-green/50 min-h-[120px]"
                        placeholder={field.placeholder || `Enter ${field.label}...`}
                      />
                    ) : (
                      <>
                        <input 
                          type={field.type === 'password' && !showKeys[field.id] ? 'password' : 'text'}
                          className="w-full bg-bg-dark border border-border rounded-xl py-3 pl-4 pr-12 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-green/50"
                          placeholder={field.placeholder || `Enter ${field.label}...`}
                        />
                        {field.type === 'password' && (
                          <button 
                            onClick={() => toggleKey(field.id)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                          >
                            {showKeys[field.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-2 bg-green/10 text-green border border-green/20 px-6 py-2.5 rounded-xl font-bold hover:bg-green text-sm hover:text-white transition-all">
                  <Save className="w-4 h-4" /> Save {section.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
