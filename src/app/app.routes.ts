import { Router, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { DescriptionFormComponent } from './description-form/description-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'analytics', component: AnalyticsComponent, canActivate: [() => inject(AuthService).user == 'manager' || inject(Router).parseUrl('')] },
    {
        path: 'account', canActivateChild: [() => !inject(AuthService).isAuthenticated || inject(Router).parseUrl('')], children: [
            { path: 'login', component: LoginComponent },
            { path: 'pricing', component: PricingComponent },
        ]
    },
    { path: 'description', component: DescriptionFormComponent, canDeactivate: [(component: DescriptionFormComponent) => component.exit()] },
    { path: 'dashboard', canMatch: [() => inject(AuthService).user == 'standard'], component: DashboardComponent },
    { path: 'dashboard', canMatch: [() => inject(AuthService).user == 'admin'], component: AdminDashboardComponent },
    { path: '', component: HomeComponent },
];
