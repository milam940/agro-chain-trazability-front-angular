// Angular
import { Component } from '@angular/core';

// Ionic
import { NavParams } from 'ionic-angular';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'basic-table',
	templateUrl: 'details.html'
})
export class DetailsPage {

	public title: string;

	constructor(private paramsCtrl: NavParams) {
		this.title = this.paramsCtrl.get('title');
	}
}

export class BasicTableComponent {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}