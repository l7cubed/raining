// Sidebar.tsx
import classNames from 'classnames'

interface SidebarProps {
  className?: string
  children: React.ReactNode
}

export const Sidebar = (props: SidebarProps) => {
  const { className, children } = props

  return (
    <aside
      className={classNames(
        'fixed top-20 left-0 h-full bg-pt-purple-800 p-4 overflow-y-auto',
        className
      )}
      style={{ width: '31%' }} // Inline style for custom width
    >
      {children}
    </aside>
  )
}
