import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
	name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {
	transform(matiralStatus: number | undefined): string {
		const maritalStatusMap: { [key in MaritalStatusEnum]: string } = {
			[MaritalStatusEnum.SINGLE]: 'Solteiro',
			[MaritalStatusEnum.MARRIED]: 'Casado',
			[MaritalStatusEnum.DIVORCED]: 'Divorciado',
		};

		return matiralStatus ? maritalStatusMap[matiralStatus as MaritalStatusEnum] : '';
	}

}

