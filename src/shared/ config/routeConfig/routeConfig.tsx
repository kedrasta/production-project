import { RouteProps } from "react-router-dom";
import { FavoritesPage } from "pages/ FavoritesPage";
import { MainPage } from "pages/MainPage";
import { ReposPage } from "pages/ReposPage";

export enum AppRoutes {
  MAIN = "main",
  FAVORITES = "favorites",
  REPOS = "repos",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FAVORITES]: "/favorites",
  [AppRoutes.REPOS]: "/repos",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritesPage />,
  },
  [AppRoutes.REPOS]: {
    path: RoutePath.repos,
    element: <ReposPage />,
  },
};
