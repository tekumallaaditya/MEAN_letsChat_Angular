import {Component} from '@angular/core';
import{NgForm} from '@angular/forms';
import {Router} from "@angular/router";

import{newUser} from './register.modal';
import{registerService} from './register.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';


@Component({
    selector: 'reg-app',
    templateUrl: './register.component.html'
})

export class registerComponent{
    userName:string;
    userEmail:string;
    userPassword:string;

    constructor( private _registerService: registerService ){}

    createUser(form : NgForm){
        console.log(form.value.Uname);
        this.userName = form.value.Uname;
        this.userEmail = form.value.email;
        this.userPassword = form.value.password;

        this._registerService.registerUser(form.value).subscribe((response) => {
            console.log('inside the component subscribe function')
            if(response.status == 201){
                console.log('success, response is -> '+ response.status);
            } else {
                console.log('failed, response is-> '+ response.status);
            }
        })
        

    }
}