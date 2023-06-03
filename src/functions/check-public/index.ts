import { APP_ROUTES } from "@/constants/app-routes";
/**
*
* @param asPath string
* @returns bolean
*
*/

export const checkPublic = (path:string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public)

    return appPublicRoutes.includes(path)
}