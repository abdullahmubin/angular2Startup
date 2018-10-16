import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPost } from '../Models/post';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Template/home.component.html'
})

export class HomeComponent implements OnInit {
    
    posts: IPost[];
    post: IPost;
    msg: string;
    indLoading: boolean = false;
    userFrm: FormGroup;
    dbops: DBOperation;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT +'postapi/')
            .subscribe(posts => { this.posts = posts; this.indLoading = false; },
            error => this.msg = <any>error);
    }

}
