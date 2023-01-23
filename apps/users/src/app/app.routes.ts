import { Route } from '@angular/router';
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
import { DisplayPanelComponent } from './utils/display-panel/display-panel.component';

export const appRoutes: Route[] = [
  { path: '', component: BookingComponent },
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
  {  path: 'display',component:DisplayPanelComponent}
];
