import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-buttons-container',
    templateUrl: './buttons-container.component.html',
    styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
    @Input({ required: true }) isInEditMode: boolean = false;
    @Input({ required: true }) enableSaveButton: boolean = false;

    @Output('onSaveButton') onSaveButtonEmitt = new EventEmitter<void>();
    @Output('onEditButton') onEditButtonEmitt = new EventEmitter<void>();
    @Output('onCancelButton') onCancelButtonEmitt = new EventEmitter<void>();

    onSaveButton() {
        this.onSaveButtonEmitt.emit();
    }

    onEditButton() {
        this.onEditButtonEmitt.emit();
    }

    onCancelButton() {
        this.onCancelButtonEmitt.emit();
    }
}
