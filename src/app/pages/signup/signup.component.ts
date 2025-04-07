import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

 constructor(private userService:UserService,private snack:MatSnackBar){}
  

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }
 
  formSubmit()
  {
   console.log(this.user)
   //validate 
    if(this.user.username==''||this.user.username==null){
      // alert("user required");
      this.snack.open("Usrename is required !","",{
        duration:2000
      });
      return;
    }
    if(this.user.password==''||this.user.password==null || this.user.firstName==''||this.user.firstName==null || this.user.lastName==''||this.user.lastName==null||this.user.email==''||this.user.email==null ||this.user.phone==''||this.user.phone==null  ){
      // alert("user required"); 
      this.snack.open("Fill the required tab!","",{
        duration:2000
      });
      return;
    }
    // add user: userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // alert("success");
        Swal.fire("successfully done !!","user id is "+ data.id,"success")
      },
      (error)=>{
        //error
        console.log(error);
        // alert("something went wrong");
        this.snack.open("Username already there","",{
          duration:2000
        })
      }
    )
  }

  clearData(){
  
   this.user.username='',
   this.user. password='',
   this.user. firstName='',
   this.user. lastName='',
   this.user. email='',
   this.user. phone='';
  }
}
