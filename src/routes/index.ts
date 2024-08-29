import { Router } from "express"
import authenticationRoutes from "../Modules/Authentication/authentication.routes"
import roomRoutes from "../Modules/Room/room.routes"

const routes=Router()


const moduleRoutes=[
    {
        path:"/auth",
        route:authenticationRoutes
    },
    {
        path:"/rooms",
        route:roomRoutes
    }
]

moduleRoutes.forEach(item=>routes.use(item.path,item.route))





export default routes