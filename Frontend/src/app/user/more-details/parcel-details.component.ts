import { Component, OnInit } from '@angular/core';
import * as Actions from '../../shared/state/parcel.actions';
import { getParcel, getParcels } from 'src/app/shared/state/parcel.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';


interface IParcel {
  name: string;
  from: string;
  id: string;
  destination: string;
}

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  id!: string | number;
  order: any;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.SELECTED_PARCEL_ID({ id: this.id }));

    this.store.select(getParcel).subscribe((data) => {
      this.order = data;
    });
  }
}