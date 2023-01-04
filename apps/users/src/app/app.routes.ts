import { Route } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
export const appRoutes: Route[] = [

    {path:'App',component:AppComponent},
{path:'booking',component:BookingComponent},
{path:'booking-details',component:BookingDetailsComponent},
 ];