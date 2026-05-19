# Angular Notes and Interview Questions

## What is Angular in Web Development?

Angular is a popular open-source front-end framework developed by Google for building dynamic web applications.

It is mainly used to create:

- Single Page Applications (SPAs)
- Enterprise dashboards
- Admin panels
- Real-time applications
- Progressive Web Apps (PWAs)

Angular uses:

- **TypeScript** (main programming language)
- **Components** for UI building
- **Services** for business logic
- **Dependency Injection**
- **Routing**
- **RxJS Observables**

Official Website: https://angular.dev

---

# Top 15 Angular Interview / Learning Questions

## 1. What is Angular?

Angular is a TypeScript-based front-end framework used to build scalable web applications.

---

## 2. What are the main features of Angular?

- Component-based architecture
- Two-way data binding
- Dependency Injection
- Routing
- Directives
- Services
- RxJS support

---

## 3. What is TypeScript and why does Angular use it?

TypeScript is a superset of JavaScript that adds:

- Static typing
- Interfaces
- Better tooling
- OOP features

Angular uses it for maintainable large-scale applications.

Official Site: https://www.typescriptlang.org

---

## 4. What is a Component in Angular?

A component controls a part of the UI.

### Example

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
```

Each component has:

- HTML template
- CSS styles
- TypeScript class

---

## 5. What is Data Binding in Angular?

Data binding connects the UI and component data.

### Types of Data Binding

- Interpolation `{{ }}`
- Property binding `[ ]`
- Event binding `( )`
- Two-way binding `[(ngModel)]`

---

## 6. Explain Two-Way Data Binding

It synchronizes data between UI and component automatically.

### Example

```html
<input [(ngModel)]="username">
```

---

## 7. What are Directives in Angular?

Directives modify DOM behavior.

### Types of Directives

- Component directives
- Structural directives (`*ngIf`, `*ngFor`)
- Attribute directives (`ngClass`, `ngStyle`)

---

## 8. What is Dependency Injection (DI)?

Dependency Injection is a design pattern where services are injected into components instead of manually creating them.

### Benefits

- Reusability
- Loose coupling
- Easy testing

---

## 9. What are Services in Angular?

Services contain reusable business logic or API calls.

### Example Uses

- HTTP requests
- Authentication
- Shared data

---

## 10. What is Routing in Angular?

Routing allows navigation between pages/components without reloading the page.

### Example

```ts
const routes: Routes = [
  { path: 'home', component: HomeComponent }
];
```

---

## 11. What is Lazy Loading?

Lazy loading loads modules only when needed, improving performance.

### Benefits

- Faster initial load
- Better optimization

---

## 12. What is RxJS in Angular?

RxJS is a library for reactive programming using Observables.

### Used For

- Async operations
- API handling
- Event streams

Official Site: https://rxjs.dev

---

## 13. What are Observables?

Observables handle asynchronous data streams.

### Example

```ts
this.http.get().subscribe(data => {
  console.log(data);
});
```

---

## 14. What is Angular CLI?

Angular CLI is a command-line tool to create and manage Angular projects.

### Common Commands

```bash
ng new app-name
ng serve
ng generate component
```

Documentation: https://angular.dev/tools/cli

---

## 15. Difference Between AngularJS and Angular?

| AngularJS | Angular |
|------------|----------|
| JavaScript | TypeScript |
| MVC architecture | Component-based |
| Slower | Faster |
| Uses controllers | Uses components |
| Old framework | Modern framework |

---

# Beginner Learning Path for Angular

1. Learn HTML/CSS/JavaScript
2. Learn TypeScript
3. Understand Components
4. Learn Data Binding
5. Learn Directives
6. Learn Services & Dependency Injection
7. Learn Routing
8. Learn HTTP/API calls
9. Learn RxJS
10. Build Projects

---

# Best Official Resources

- Angular Documentation  
  https://angular.dev

- Angular Tutorial Guide  
  https://angular.dev/tutorials/learn-angular

- TypeScript Documentation  
  https://www.typescriptlang.org/docs/