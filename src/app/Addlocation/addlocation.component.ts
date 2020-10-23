import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class addlocationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  storeForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]),
    lat: new FormControl('',[Validators.required]),
    lng: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    des: new FormControl('',[Validators.required]),
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

  insert(): void {
    if (this.storeForm.invalid) {
      return;
    }

    const { name, img, lat, lng, type, des } = this.storeForm.getRawValue();

    this.authService.addLocation(name, img, lat, lng, des, type ).subscribe(data => {
      console.log("store insert");

    });
  }

  ngOnInit(): void {

  }

}
