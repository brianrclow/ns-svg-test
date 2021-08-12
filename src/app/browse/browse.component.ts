import { Component, OnInit } from '@angular/core'
import { registerElement } from '@nativescript/angular';

// ADDED
import { Svg } from '@nativescript/canvas';
registerElement('Svg', () => Svg);

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  // ADDED
  svgLoaded(event) {
    setTimeout(() => {
      console.log('Loaded!');
      const svg = event.object;
      svg.createNativeView();
      svg.src = 'https://media.streetparking.com/media/6112d13c57edfe76bbffdd6b/6112d13c57edfe76bbffdd6b.svg';

      console.log('svg.width: ', svg.width);
      console.log('svg.height: ', svg.height);
      console.log('svg.src: ', svg.src);
      svg.setNativeView(svg._svg_);
      console.log('svg.nativeView: ', svg.nativeView);
      // console.log('svg.readyEvent: ', svg.readyEvent);
      console.log('svg._svg: ', svg._svg);
      console.log('svg._dom: ', svg._dom);
      console.log('svg._serializer: ', svg._serializer);
      console.log('svg.__children: ', svg.__children);
      console.log('svg.__attachedToDom: ', svg.__attachedToDom);
    }, 500);
  }
}
