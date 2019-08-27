import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {
  private sub: any;
  lang: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lang = params['lang'];
      // In a real app: dispatch action to load the details here.
      console.log(this.lang);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
