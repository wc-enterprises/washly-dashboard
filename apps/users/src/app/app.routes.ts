import { Route } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [

    {path:'App',component:AppComponent},
{path:'booking',component:BookingComponent},

 ];