/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Service} from './service';

@Component({
	selector: 'my-app', // Defines the <my-app></my-app> tag
	appInjector: [Service]
})

@View({
	template: ' <h1> {{greeting}} World </h1>' // Defines the inline template for the component
})

class MyAppComponent {
	greeting: string;
	constructor(service: Service) {
		this.greeting = service.getGreeting();
		setTimeout(()=>this.greeting = 'Howdy', 1000);//'Alice';
	}
}

bootstrap(MyAppComponent);
