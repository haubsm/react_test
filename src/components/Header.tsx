import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signIn', label: 'SignIn' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header className="flex gap-4">
      {navigations.map(nav => {
        return (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) =>
              isActive ? 'font-bold text-red-500' : ''
            }>
            {nav.label}
          </NavLink>
        )
      })}
    </header>
  )
}
