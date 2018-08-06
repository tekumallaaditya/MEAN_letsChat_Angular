import{Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

import{newUser} from './register.modal';


@Injectable()

export class registerService{

    private _registerURL = 'http://localhost:8080/register';

    constructor(private _http: Http){}

    registerUser(userNew){
        const body: newUser = {
            userName: userNew.Uname,
            userEmail: userNew.email,
            userPassword: userNew.password
        }
        console.log('body value is-> '+ body.userPassword);
        return this._http.post(this._registerURL, body);
    }


}