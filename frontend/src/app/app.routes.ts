import { Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MynetworkComponent } from './component/mynetwork/mynetwork.component';

export const routes: Routes = [
    {path: 'home',component:LandingPageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'about',component:AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {
        path: 'uniconnect.com',
        component:UserDashboardComponent, 
        children: [
            {path: 'feed',component:DashboardComponent},
            {path: '',redirectTo: 'feed',pathMatch: 'full'},
            {path: 'mynetwork',component:MynetworkComponent},
            {path: 'profile',component: ProfileComponent},
        ]
    },
    {path: '**',component: NotfoundComponent},
];
