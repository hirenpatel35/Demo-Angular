import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { EventsModule } from './events/events.module';
import { JphModule } from './jph/jph.module';
import { RouterModule } from '@angular/router';
import { NavigationModule } from './navigation/navigation.module';
import { SecurityModule } from './security/security.module';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouteGuardService } from './route-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //EmployeesModule,
    //EventsModule,
   // JphModule,
    RouterModule,
    NavigationModule,
   // SecurityModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi:true,
      useClass:InterceptorService
    },
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
