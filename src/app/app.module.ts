import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CallNumber],
  bootstrap: [AppComponent],
})
export class AppModule {}
