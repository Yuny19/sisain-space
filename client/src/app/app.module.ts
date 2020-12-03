import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { SisainSharedModule } from './shared/sisain-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PopoverModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { LoginModalComponent } from './view/login-modal/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SisainSharedModule,
    HttpClientModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  entryComponents: [ LoginModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
