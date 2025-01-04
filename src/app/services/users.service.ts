import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { usersList } from "../data/usersList";
import { UserListResponse } from "../type/user-list-response";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUsers(): Observable<UserListResponse> {
        return new Observable<UserListResponse>((observer) => {
            setTimeout(() => {
                observer.next(usersList);
                observer.complete();
            }, 500);
        })
    }
}