import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{RouterModule} from '@angular/router';
import{HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { registerComponent } from './register/register.component';
import { registerService } from './register/register.service';


@NgModule({
  declarations: [
    AppComponent,
    registerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [registerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
