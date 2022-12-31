import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AppsettingpageComponent } from './appsettingpage/appsettingpage.component';
import { CampaignEditpageComponent } from './campaign-editpage/campaign-editpage.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceEditpageComponent } from './service-editpage/service-editpage.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';

export const appRoutes: Route[] = [

    {path:'App',component:AppComponent},
{path:'Loginpage',component:LoginpageComponent},
 {path:'appsettingpage',component:AppsettingpageComponent},  
 {path:'campaigneditpage',component: CampaignEditpageComponent},
 {path:'servicepage',component:ServicePageComponent},
 {path:'serviceeditpage',component:ServiceEditpageComponent},
 {path:'deletebox',component:DeleteBoxComponent},
 {path:'navbar',component:NavBarComponent },
 {path:'header',component:HeaderComponent}

 

];
