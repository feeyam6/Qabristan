// signin.component.ts
import { CommonModule, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrl: "./signin.component.scss",
  imports:[NgIf, CommonModule]
})
export class SigninComponent {
  constructor(public angularFireAuth: AngularFireAuth) {}
  logOut() {
    this.angularFireAuth.signOut();
  }
}