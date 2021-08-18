import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JphUserPostsComponent } from './jph-user-posts/jph-user-posts.component';
import { UserpostsService } from './services/userposts.service';
import { HttpClientModule } from '@angular/common/http';
import { JphRoutingModule } from './jph-routing.module';



@NgModule({
  declarations: [
    JphUserPostsComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule,
    JphRoutingModule
  ],
  exports:[JphUserPostsComponent],
  providers:[UserpostsService]
})
export class JphModule { }
