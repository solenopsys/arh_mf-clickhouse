import {Injectable} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {HStreamService} from "@solenopsys/lib-hyperstreams";

const decode=(val)=> JSON.parse( new TextDecoder().decode(val))

@Injectable({
  providedIn: 'root'
})
export class ClickhouseService {

  constructor(private hs: HStreamService) { }

  list(query:string): Observable<any> {
    return this.hs.createStringQuery("alexstorm-hsm-clickhouse", query, 1).pipe(map(decode)).pipe(map(input=>input.data)).pipe(tap(k=>console.log("PIPE DATA",k)))
  }
}
