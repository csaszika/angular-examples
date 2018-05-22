import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import {ShellComponent} from './main/shell/shell.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {StoreModule} from '@ngrx/store';
import {reducers} from './main/ngrx-core/reducers';
import {StoreDevtoolsModule, StoreDevtoolsOptions} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    // Overlay module is needed by dashboard-example module
    OverlayModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{maxAge: 50}) : [],
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
