# Angular Essentials - Day 1 (25/11/24)

## Installation

1. Install Angular CLI globally:

   ```bash
   npm install -g @angular/cli
   
2. Create a new Angular project:

   ```bash
   npm install -g @angular/
   cd <project-name>
   ng serve

## Data Binding

1. **Interpolation**
    Display data from the component in the template using `{{ }}`.  
    Example:
    ```html
    <h2>{{ title }}</h2>
    ```
    In your component:
    ```typescript
    title = 'Angular Essentials';
    ```

2. **Property Binding**
    Bind properties of HTML elements to component data using `[ ]`.  
    Example:
    ```html
    <button [disabled]="isDisabled">Click Me</button>
    ```
    In your component:
    ```typescript
    isDisabled = true;
    ```

3. **Event Binding**
    Bind events (e.g., clicks) to methods in your component using `( )`.  
    Example:
    ```html
    <button (click)="handleClick()">Click Me</button>
    ```
    In your component:
    ```typescript
    handleClick() {
      console.log('Button clicked');
    }
    ```

4. **Two-Way Data Binding using `ngModel`**
    Sync data between the component and the view using `[()]`.  
    Example:
    ```html
    <input [(ngModel)]="name" />
    <p>Your name: {{ name }}</p>
    ```
    In your component:
    ```typescript
    name = 'Angular';
    ```
    **Note:** Import `FormsModule` in `app.module.ts`:
    ```typescript
    import { FormsModule } from '@angular/forms';

    @NgModule({
      imports: [BrowserModule, FormsModule],
    })
    export class AppModule {}
    ```

5. **Two-Way Data Binding without using `ngModel`**
    Use `[(value)]` for input elements combined with `(input)` for two-way data binding manually.  
    Example:
    ```html
    <input [value]="name" (input)="name = $event.target.value" />
    <p>Your name: {{ name }}</p>
    ```
    In your component:
    ```typescript
    name = 'Angular';
    ```
