import { Component, Input } from '@angular/core';
import { DependentsList } from '../../type/dependents-list';

@Component({
	selector: 'app-dependence-list',
	templateUrl: './dependence-list.component.html',
	styleUrl: './dependence-list.component.scss'
})
export class DependenceListComponent {
	@Input({ required: true }) dependentsList: DependentsList | undefined = [];
}
