import Verify_Email from "../../pages/auth/verify_email"
import Login from "../../pages/auth/login"
import SignUp from "../../pages/auth/signup"
import {
    signIn,
    signUp,
    verify_email
} from "../pathName"
export const PublicRoutes = [
    {
        title: "signIn",
        component : Login,
        path: signIn
    },
    {
        title: "signUp",
        component: SignUp,
        path: signUp
    },
    {
        title: "verify_email",
        component: Verify_Email,
        path: verify_email
    }
]