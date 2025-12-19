import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routeConfig: Routes = [
    {
        path: "login",
        component: LoginComponent,
        title: "Login Page"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Details Page"
    }
];

export default routeConfig;