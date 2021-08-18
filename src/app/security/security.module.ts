import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SecurityService } from './services/security.service';
import { FormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule,
    SecurityRoutingModule,
    FormsModule
  ],
  providers:[SecurityService]
})
export class SecurityModule { }
