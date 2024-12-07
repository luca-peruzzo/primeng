import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'min-max-doc',
    template: `
        <app-docsectiontext>
            <p>Boundaries are configured with the <i>min</i> and <i>max</i> properties whose defaults are 0 and 100 respectively.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
        </div>
        <app-code [code]="code" selector="knob-min-max-demo"></app-code>
    `,
    standalone: false
})
export class MinMaxDoc {
    value: number = 10;

    code: Code = {
        basic: `<p-knob [(ngModel)]="value" [min]="-50" [max]="50" />`,

        html: `<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-min-max-demo',
    templateUrl: './knob-min-max-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobMinMaxDemo {
    value: number = 10;
}`
    };
}
