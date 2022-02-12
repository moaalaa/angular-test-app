import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AlertComponent } from './alert/alert.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AnimeListComponent,
    AlertComponent,
    AnimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
