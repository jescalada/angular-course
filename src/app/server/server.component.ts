import { Component } from "@angular/core";

// Components are simply TypeScript classes
// Requires a class decorator to define as a Component
@Component({
    // We set up the metadata for the class. Tells Angular what to do with the class
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

}