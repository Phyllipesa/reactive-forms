import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { usersList } from "../data/usersList";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUsers() {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(usersList);
                observer.complete();
            }, 500);
        })
    }
}