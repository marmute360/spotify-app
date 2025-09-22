import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { PagesPresenter } from '../../pages/pages.presenter';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public subSink = new SubSink();
 @Input() isLoading: boolean = false;

 constructor(public presenter: PagesPresenter){}

 ngOnInit(): void {
   this.presenterSubscriptions();
 }

 presenterSubscriptions() {
  this.subSink.add(
    this.presenter.loadingSubject$.subscribe((value: boolean) => {
      this.isLoading = value
    })
  )
 }
}
