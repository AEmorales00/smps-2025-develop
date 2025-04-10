import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  type OnInit,
} from '@angular/core'
import JsVectorMap from 'jsvectormap'
import { loadAllVectorMaps } from './vector-maps'

loadAllVectorMaps(JsVectorMap)

@Component({
  selector: 'app-world-vector-map',
  standalone: true,
  template:
    '<div [id]="mapId" [style.width]="width" [style.height]="height"></div>',
})
export class WorldVectorMapComponent implements OnInit, AfterViewInit {
  @Input() width: string = ''
  @Input() height: string = ''
  @Input() options: Record<string, unknown> = {}
  @Input() type: string = ''
  @Input() mapId: string = 'map'

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    new JsVectorMap({
      selector: '#' + this.mapId,
      map: this.type,
      ...this.options,
    })
  }
}
