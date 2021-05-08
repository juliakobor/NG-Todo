import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: `./form.component.html`,
  styleUrls: [
  ]
})
export class FormComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    todo: null,
    todos: this.fb.array(['Update the latest version', 'Practice', 'Workout'], [Validators.required]),
  });
  constructor(private fb: FormBuilder) {
  }
  get todos(): FormArray {
    return this.myForm.get('todos') as FormArray;
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.myForm, this.myForm.value);
    const newTodo = new FormControl(this.myForm.value.todo);
    this.todos.push(newTodo);
    }
  removeTodo(index: number): void {
    this.todos.removeAt(index);
  }

}
