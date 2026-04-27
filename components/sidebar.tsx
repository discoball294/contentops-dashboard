'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Settings, BarChart3, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Accounts', href: '/dashboard/accounts', icon: Users },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 bg-bg-panel border-r border-border h-screen fixed left-0 top-0 flex-col z-20">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <span className="text-xl font-heading font-bold tracking-tight">ContentOps</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-green/10 text-green border border-green/20" 
                    : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-green" : "text-text-muted group-hover:text-text-primary")} />
                <span className="font-medium">{item.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green" />}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="bg-bg-dark/50 rounded-xl p-4">
            <p className="text-xs text-text-muted">Version</p>
            <p className="text-sm font-medium">1.0.4-beta</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-panel border-t border-border flex justify-around items-center h-16 px-2 z-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                isActive ? "text-green" : "text-text-muted"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
