import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReclamosComponent } from './reclamos/reclamos.component';

import { ReclamosService } from './services/reclamos.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { environment } from '../environments/environment'

import { AngularFireDatabaseModule } from 'angularfire2/database'

import { AngularFireModule } from 'angularfire2'

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ReclamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    
  ],
  providers: [ReclamosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

