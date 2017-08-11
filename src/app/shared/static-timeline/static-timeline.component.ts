import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import randomColor = require('randomcolor');

export interface IEvent {
  date: string;
  time?: string;
  texts?: string[];
  templates?: number[];
  reversed?: boolean[];
  hasAvatar?: boolean[];
}

type Luminosity = 'bright'|'dark'|'light'|'random';

/**
 * A component for displaying a series of timeline events
 * Inputs:
 *   - events
 *     - (required) An array of events to be shown
 *     - e.g. `[{ date: 'Tue Jul 29 2014', texts: ['lorem ipsum']}, ...]`
 *   - block
 *      - a flag for block mode headers
 *   - full
 *      - a flag for full mode where the timeline is in the middle
 *   - luminosity
 *      - bright/light/dark/random - colors for the bullets
 *   - colors
 *      - an array of css colors to be used for bullets
 *   - darkMode
 *      - enable dark theme
 *   - icon
 *      - the name of bootstrap glyphicon to be used in bullets
 *   - templates
 *      - <ng-template> content children
 *
 * Note: Date/Time are displayed as provided, without formatting/sorting
 *
 * @example
 * <admin-static-timeline [events]="events"></admin-static-timeline>
 */
@Component({
  selector: 'admin-static-timeline',
  templateUrl: './static-timeline.component.html',
  styleUrls: ['./static-timeline.component.scss'],
})
export class StaticTimelineComponent implements OnInit, OnChanges {
  @Input() events: IEvent[];
  @Input() luminosity: Luminosity = 'bright';
  @Input() block: boolean;
  @Input() full: boolean;
  @Input() icon = 'comment';
  @HostBinding('class.dark-mode') @Input() darkMode: boolean = false;
  @ContentChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  @Input() colors: string[];

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    if (!this.colors || this.colors.length < this.events.length) {
      this.colors = randomColor({
        count: this.events.length,
        luminosity: this.luminosity,
      } as any) as any as string[];
    }

    if (this.full) {
      let i = 0;
      this.events.forEach((evt) => {
        evt.reversed = evt.texts.map(() => (i++) % 2 > 0);
      });
    }
  }

  getTemplate(i: number) {
    return this.templates.toArray()[i];
  }

  shade(from: string) {
    return shadeBlendConvert(0.8, from);
  }
}

/* tslint:disable */
// from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeBlendConvert(p: number, from: string, to?: string) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    function sbcRip(d: any){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            if(l==8||l==6||l<4)return null; //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}
