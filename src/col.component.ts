import { Component,OnInit,ContentChildren } from '@angular/core';
import {ColBody} from './col-body.directive';

@Component({
    selector: 'layout-col',
    styles:[
        `
        :host{
            width:100%
        }
        `
    ]
})
export class Col implements OnInit {
    @ContentChildren(ColBody) body:ColBody;

    constructor() {

    }

    ngOnInit(){

    }
}