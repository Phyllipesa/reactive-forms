import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';
import { maritalStatusDescriptionMap } from '../utils/marital-type-description-map';

@Pipe({
	name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {
	transform(matiralStatus: number | undefined): string {
		return matiralStatus ? maritalStatusDescriptionMap[matiralStatus as MaritalStatusEnum] : '';
	}
}

