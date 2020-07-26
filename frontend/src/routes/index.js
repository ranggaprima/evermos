import Home from "../client/components/App"
import MovieDetail from "../client/containers/moviedetail/index"
import NotFound from "../client/containers/errors/index"

export default [
  {
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/movie/:id",
        exact: true,
        component: MovieDetail
      },
      {
        path: "*",
        state: { fullscreen: true },
        exact: true,
        component: NotFound
      }
    ]
  }
]
