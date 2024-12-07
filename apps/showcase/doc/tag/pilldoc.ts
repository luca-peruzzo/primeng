import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'pill-doc',
    template: `
        <app-docsectiontext>
            <p>Enabling <i>rounded</i>, displays a tag as a pill.</p>
        </app-docsectiontext>
        <div class="card flex justify-center gap-2">
            <p-tag value="Primary" [rounded]="true" />
            <p-tag severity="secondary" value="Secondary" [rounded]="true" />
            <p-tag severity="success" value="Success" [rounded]="true" />
            <p-tag severity="info" value="Info" [rounded]="true" />
            <p-tag severity="warn" value="Warn" [rounded]="true" />
            <p-tag severity="danger" value="Danger" [rounded]="true" />
            <p-tag severity="contrast" value="Contrast" [rounded]="true" />
        </div>
        <app-code [code]="code" selector="tag-pill-demo"></app-code>
    `,
    standalone: false
})
export class PillDoc {
    code: Code = {
        basic: `<p-tag value="Primary" [rounded]="true" />
<p-tag severity="secondary" value="Secondary" [rounded]="true" />
<p-tag severity="success" value="Success" [rounded]="true" />
<p-tag severity="info" value="Info" [rounded]="true" />
<p-tag severity="warn" value="Warn" [rounded]="true" />
<p-tag severity="danger" value="Danger" [rounded]="true" />
<p-tag severity="contrast" value="Contrast" [rounded]="true" />`,
        html: `<div class="card flex justify-center gap-2">
    <p-tag value="Primary" [rounded]="true" />
    <p-tag severity="secondary" value="Secondary" [rounded]="true" />
    <p-tag severity="success" value="Success" [rounded]="true" />
    <p-tag severity="info" value="Info" [rounded]="true" />
    <p-tag severity="warn" value="Warn" [rounded]="true" />
    <p-tag severity="danger" value="Danger" [rounded]="true" />
    <p-tag severity="contrast" value="Contrast" [rounded]="true" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-pill-demo',
    templateUrl: './tag-pill-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagPillDemo {}`
    };
}
