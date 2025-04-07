import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData={
    username:'',
    password:''
  }

  constructor(private snak:MatSnackBar,private login:LoginService ,private router:Router){

  }

  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snak.open("username is required!!" ,"",{
        duration:2000,})
        return
    }
  

  if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snak.open("password is required!!" ,"",{
        duration:2000,})
        return
    }

    //req server to generate token

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");

        //login...
        this.login.loginuser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            //redirect....ADMIN:admin dashboard...NORMAL:..normal dashboard
            if(this.login.getUserRole()=="ADMIN"){
              // window.location.href="/admin"
              this.router.navigate(['/admin'])
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=="NORMAL"){
              // window.location.href="/user-dashboad"
              this.router.navigate(['/user-dashboad'])
              this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();
            }
          }
        )
      },
      (error)=>{
        console.log("Error");
        console.log(error);
        this.snak.open("Invalid details!!","",{
          duration:2000,

        })
      }
    )
}
clearData(){
  this.loginData.password='';
  this.loginData.username='';
}




}
