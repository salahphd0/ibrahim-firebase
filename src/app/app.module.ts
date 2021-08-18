// import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
// import { AngularFireDatabaseModule} from '@angular/fire/database';
// import { AngularFireStorageModule} from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { LoginPageModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    BrowserModule,
    LoginPageModule,
    IonicModule.forRoot(),
     AppRoutingModule,
 AngularFireModule.initializeApp(environment.firebaseConfig),
 AngularFireAuthModule],
 providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  // AuthService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
