import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, AbstractControl, ValidationErrors} from '@angular/forms';
import {DatabaseService} from "../database.service";


function longerThan6(control: AbstractControl): ValidationErrors | null {
    if (control.value.length >= 6) {
        return null;
    }
    const valid = control.value.length > 6;
    return valid ? null : {
        notLongEnough: true
    };
}

@Component({
    selector: 'todo-form',
    templateUrl: `./form.component.html`,
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    myForm: FormGroup = this.fb.group({
        todo: null,
        todos: this.fb.array(['Update the latest version', 'Practice', 'Workout']),
    });

    constructor(private fb: FormBuilder, private databaseService: DatabaseService) {
    }

    //service metódusok
    /*showTodos(): void {
        this.databaseService.getTodos()
            .subscribe(todos => console.log(todos));
    }*/

    onSubmit(): void {
        this.databaseService.postTodo(this.myForm.value.todo)
        this.databaseService.getTodos()
            .subscribe(todos => console.log(todos));
    }

    //formarray metódusok
    get todos(): FormArray {
        return this.myForm.get('todos') as FormArray;
    }

    ngOnInit(): void {
    }

    removeTodo(index: number): void {
        this.todos.removeAt(index);
    };
}
