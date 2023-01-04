import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BookingComponent } from './booking/booking.component';
import { EditableTableComponent } from './utils/table/table.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BookingComponent,
    EditableTableComponent,
    BookingDetailsComponent,
  ],
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
