import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'svg-icon',
  styleUrls: ['./icon.component.css'],
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {

  @Input() public src: string;
  @Input() public classes: 'icon';
  @Input() public width = '100%';
  @Input() public height: string;
  @Input() public viewBox: string;
  @Input() public preserveAspectRatio = 'xMinYMax meet';

  @HostBinding('class') @Input() public colorFor = 'fill';

  constructor() { }

  ngOnInit() {}
}
