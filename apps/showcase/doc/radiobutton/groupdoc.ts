import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'group-doc',
    template: `
        <app-docsectiontext>
            <p>RadioButton is used as a controlled input with <i>value</i> and <i>ngModel</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <div class="flex flex-wrap gap-4">
                <div class="flex items-center">
                    <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex items-center">
                    <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex items-center">
                    <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex items-center">
                    <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>
        </div>
        <app-code [code]="code" selector="radio-button-group-demo"></app-code>
    `,
    standalone: false
})
export class GroupDoc {
    ingredient!: string;

    code: Code = {
        basic: `<div class="flex flex-wrap gap-4">
    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>`,

        html: `<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
            <label for="ingredient1" class="ml-2">Cheese</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
            <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
            <label for="ingredient3" class="ml-2">Pepper</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
            <label for="ingredient4" class="ml-2">Onion</label>
        </div>
    </div>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-group-demo',
    templateUrl: './radio-button-group-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonGroupDemo {
    ingredient!: string;
}`
    };
}
