import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../modals/player';


@Pipe({
  name: 'piperfilter'
})
export class PiperfilterPipe implements PipeTransform {
  transform(value:Array<Iplayers>,sereachstring:string): Iplayers[] {
    console.log(value);
    console.log(sereachstring)
      let  filterplayer : Array<Iplayers>=[]
    if(!value){
      return []
    }
    if(!sereachstring){
      return value
    }

    filterplayer=value.filter(ele=>{
  return ele.team.toLowerCase().includes(sereachstring.toLowerCase())
 })
// console.log(filterplayer)
 return filterplayer; 
  }
}
