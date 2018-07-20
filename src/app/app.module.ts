import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './app-main/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './app-main/home/home.component';
import {PageNotFoundComponent} from './app-main/page-not-found/page-not-found.component';
import {ShellComponent} from './app-main/shell/shell.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app-main/ngrx-core/reducers';
import {StoreDevtoolsModule, StoreDevtoolsOptions} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AngularExamplesLibraryModule} from 'angular-examples-library';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
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
    AngularExamplesLibraryModule,
    !environment.production ? StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{maxAge: 50}) : [],
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
