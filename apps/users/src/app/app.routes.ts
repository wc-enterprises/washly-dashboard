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
import { BookingComponent } from './booking/booking.component';
import { CampaignComponent } from './campaign/campaign.component';
import { BillDetailsComponent } from './booking-details/booking-details.component';
import { ExecutiveComponent } from './executive/executive.component';
import { CustomerComponent } from './customer/customer.component';
import { RevenueComponent } from './revenue/revenue.component';
import { StoreComponent } from './store/store.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const appRoutes: Route[] = [
  { path: 'App', component: AppComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'app-setting', component: AppsettingpageComponent },
  { path: 'campaigneditpage', component: CampaignEditpageComponent },
  { path: 'servicepage', component: ServicePageComponent },
  { path: 'serviceeditpage', component: ServiceEditpageComponent },
  { path: 'deletebox', component: DeleteBoxComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'bill', component: BillDetailsComponent },
  {  path: 'customer',component:CustomerComponent},
  {path:'Executive',component:ExecutiveComponent},
  {path:'Revenue',component: RevenueComponent},
  {path:'Store',component:StoreComponent},
  {path:'Analytics',component:AnalyticsComponent},

];
