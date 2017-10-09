import { RouterexampleComponent } from './routerexample/routerexample.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const AppRoutes: any = [
    { path: "routerexamplesamepage", component: RouterexampleComponent },
    { path: "secondpage", component: SecondpageComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }

];

export const AppComponents: any = [
    RouterexampleComponent,
    SecondpageComponent,
    LoginComponent,
    RegisterComponent
];