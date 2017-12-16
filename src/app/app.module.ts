import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgSemanticModule} from "ng-semantic";

const appRoutes: Routes = [
    {
        path: 'cv',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgSemanticModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
