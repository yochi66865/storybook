// import { platformIconMap } from './../../mappers/platformNameToSvgIcon';
// import { platformNameToColoredSvgIcon } from 'projects/af-ui/src/mappers/platformNameToSvgIcon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { text, withKnobs, select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AfuiIconModule } from './afui-icon.module';
import * as icons from './icons';

const storyAPI = storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, HttpClientModule, AfuiIconModule],
    })
  );

storyAPI.add('Catalog', () => ({
  styles: [
    `
      .catalog {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 60px;
        row-gap: 40px;
        justify-items: center;
        align-items: center;
        width: 70vw;
        height: 100vh;
        padding: 30px 0;
      }
  
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #95a5a6;
      }
  
      .icon {
        margin-bottom: 5px;
      }
  
      .icon-name {
        display: inline-block;
        padding: 5px;
      }
    `,
  ],
  template: `
    <div class="catalog">
      <ng-container *ngFor="let icon of icons">
        <div class="item" *ngIf="icon.name.includes(search) && (iconStyle === 'All' || (icon.name.includes('-fill') !== (iconStyle === 'Normal')))">
          <mat-icon class="icon" [svgIcon]="icon.name"></mat-icon>
          <span class="icon-name" >{{ icon.name }}</span>
        </div>
      </ng-container>
    </div>
    `,
  props: {
    icons: Object.values(icons),
    search: text('Search..', ''),
    iconStyle: select('Icon style', ['All', 'Normal', 'Fill'], 'All'),
  },
}));

// storyAPI.add('Platform', () => ({
//   styles: [
//     `
//       .catalog {
//         box-sizing: border-box;
//         display: grid;
//         grid-template-columns: repeat(5, 1fr);
//         grid-auto-rows: 60px;
//         row-gap: 40px;
//         justify-items: center;
//         align-items: center;
//         width: 70vw;
//         height: 100vh;
//         padding: 30px 0;
//       }

//       .item {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         color: #95a5a6;
//       }

//       .icon {
//         margin-bottom: 5px;
//       }

//       .icon-name {
//         display: inline-block;
//         padding: 5px;
//       }
//     `
//   ],
//   template: `
//     <div class="catalog">
//     <ng-container *ngFor="let platform of platforms">
//       <div class="item">
//         <mat-icon class="icon" [svgIcon]="mapPlatformToIconName(platform)"></mat-icon>
//         <span class="icon-name" >{{ platform }}</span>
//       </div>
//     </ng-container>
//   </div>
//     `,
//   props: {
//     mapPlatformToIconName: platformNameToColoredSvgIcon,
//     platforms: [...platformIconMap.keys()]
//   }
// }));
