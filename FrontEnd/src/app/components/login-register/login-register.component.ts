import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {
  uname: String = 'user1';
  eid: String = 'user1@accounts.com';
  pass:String = 'user10702';
  cpass:String = 'user10702';

  eidErr:String = '';
  passErr:String = '';
  formObj: any = {
    'right-panel-active': false
  };

  constructor(private actRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    let form = this.actRoute.snapshot.paramMap.get('formId');
    if(form) {
      let formId = form.toLowerCase();

      console.log(form, formId);
      switch(formId) {
        case 'register': this.formObj['right-panel-active'] = true; break;
        case 'login': this.formObj['right-panel-active'] = false; break;
      }
    }
  }

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.eid).toLowerCase());
  }

  verifyAll() {
    var res: boolean = true;
    
    if(this.pass.length < 8) {
      res = false;
      this.passErr = '*Password must have Atleast 8 Characters';
    }

    if(this.pass !== this.cpass) {
      res = false;
      this.passErr = '*Both Passwords do not match';
    }
    
    
    if(!this.validateEmail()) {
      res = false;
      this.eidErr = '*Invalid Email Syntax';
    }

    return res;
  }

  registerClicked() {
    /** 
    console.log(`uname: ${this.uname}`);
    console.log(`eid: ${this.eid}`);
    console.log(`password: ${this.pass}`);
    console.log(`confirm password: ${this.cpass}`);
    **/

    const issue = this.verifyAll();
    if(!issue) {
      // successful
    } else {
      // Failure
    }
  }

  loginClicked() {
    /**
    console.log(`eid: ${this.eid}`);
    console.log(`password: ${this.pass}`);
    **/
  }

  openRegister() {this.formObj["right-panel-active"] = true;}
  openLogin() {this.formObj["right-panel-active"] = false;}
}
