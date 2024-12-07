import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        typescript: `import { InputMask } from 'primeng/inputmask';`
    };
}
