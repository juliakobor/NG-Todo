import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoItem} from "./todo-item";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private http: HttpClient) {
    }

    const
    apiURL = "http://localhost:3000/todos";

    getTodos(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>(this.apiURL);
    }

    postTodo(todo: TodoItem): Observable<TodoItem[]> {
        return this.http.post<TodoItem[]>(this.apiURL, todo);
    }
}
