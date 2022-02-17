import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MegaMenuModule } from 'primeng/megamenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegamenuComponent } from './megamenu/megamenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
