import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

// import * as appRoutes from './app.routes';

@NgModule({
   imports: [
      BrowserModule, // Reexportiert CommonModule
      HttpClientModule,
      
      // FlightBookingModule, // Don't import lazy modules

      RouterModule.forRoot(APP_ROUTES, {
         // useHash: true
         preloadingStrategy: PreloadAllModules
      })
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
