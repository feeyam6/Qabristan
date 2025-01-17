import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "../environments/environment";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { bearerTokenInterceptor } from "./interceptor/vearer-token.interceptor";

@NgModule({
  imports: [
    AppComponent,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule
  ],
  providers: [provideHttpClient(withInterceptors([bearerTokenInterceptor]))],
  bootstrap: [],
})
export class AppModule {}