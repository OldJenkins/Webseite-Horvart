import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  help: string ="Anmelden";


  constructor() { }

  ngOnInit(): void {

  }
  
  register() {

    document.getElementById("repeat").style.cssText = "visibility: visible";
    this.help = "Regestrieren";
    document.getElementById("google").style.cssText = "visibility: hidden";
    document.getElementById("loginB").style.margin = "20px";
    document.getElementById("Rg").style.cssText = "border-bottom: 2px solid #81e9fc;";
    document.getElementById("SI").style.cssText = "border-bottom: none;";

  //  document.getElementById("formFooter").style.cssText = "visibility: hidden";

  }

  SignIn() {

    document.getElementById("repeat").style.cssText = "visibility: hidden";
    this.help = "Anmelden";
    document.getElementById("google").style.cssText= "visibility: visible";
    document.getElementById("loginB").style.margin = "0px";
    document.getElementById("google").style.margin= "20px";
   // document.getElementById("formFooter").style.cssText = "visibility: visible";
   document.getElementById("Rg").style.cssText = "border-bottom: none;";
   document.getElementById("SI").style.cssText = "border-bottom: 2px solid #81e9fc;";

  }


}

