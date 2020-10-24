import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.css']
})
export class editlocationComponent implements OnInit {
  data = history.state.data1999;

  constructor(private authService: AuthService) { }
  storeForm = new FormGroup({
    name: new FormControl(this.data.name),
    img: new FormControl(this.data.img),
    lat: new FormControl(this.data.lat),
    lng: new FormControl(this.data.lng),
    type: new FormControl(this.data.type),
    des: new FormControl(this.data.des),
  });

  get name(): AbstractControl {
    return this.storeForm.get('name')!;
  }

  get img(): AbstractControl {
    return this.storeForm.get('img')!;
  }

  get lat(): AbstractControl {
    return this.storeForm.get('lat')!;
  }

  get lng(): AbstractControl {
    return this.storeForm.get('lng')!;
  }

  get type(): AbstractControl {
    return this.storeForm.get('type')!;
  }

  get des(): AbstractControl {
    return this.storeForm.get('des')!;
  }

  put(): void {
    if (this.storeForm.invalid) {
      return;
    }

    const { name, img, lat, lng, type, des } = this.storeForm.getRawValue();

    this.authService.updateLocation(this.data._id,name, img, lat, lng, des, type ).subscribe(data => {
      console.log("store update");
      window.location.href = ('/del-location');

    });
  }

  ngOnInit(): void {
    console.log(history.state.data1999);
  }

}
