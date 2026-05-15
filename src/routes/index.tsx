import App from '@/App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Defalut'
// import About from './pages/About'
// import SignIn from './pages/SignIn'
// import Movies from './pages/Movies'
// import MovieDetails from './pages/MovieDetails'
// import NotFound from './pages/NotFound'

// import { Suspense } from 'react'
// import Loader from '@/components/Loader'
// import { ErrorBoundary } from 'react-error-boundary'
import { requiresAuth, guestOnly } from './loaders'
import { dynamic } from '@/utils'
import Loader from '@/components/Loader'

const About = dynamic(() => import('./pages/About'), {
  loading: <Loader />
})
const SignIn = dynamic(() => import('./pages/SignIn'))
const Movies = dynamic(() => import('./pages/Movies'))
const MovieDetails = dynamic(() => import('./pages/MovieDetails'))
const NotFound = dynamic(() => import('./pages/NotFound'))
const Todos = dynamic(() => import('./pages/Todo'))

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/signIn',
        element: <SignIn />,
        loader: guestOnly
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth, //확인
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
