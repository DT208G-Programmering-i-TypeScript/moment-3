import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConverterComponent } from './converter/converter.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'converter', component: ConverterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
