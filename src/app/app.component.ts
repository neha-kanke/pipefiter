import { Component} from "@angular/core";
import { cricketers } from "./shared/const/player";
import { reels } from "./shared/const/reels";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cricketArray=cricketers
  reelsarray=reels
  searchval !:string
  title = 'pipefiter';



}
