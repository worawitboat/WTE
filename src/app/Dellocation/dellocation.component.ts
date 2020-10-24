import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-dellocation',
  templateUrl: './dellocation.component.html',
  styleUrls: ['./dellocation.component.css']
})
export class dellocationComponent implements OnInit {
   Store  =  [];

  constructor(private router: Router, private authService: AuthService) { }

  del(data): void {
    this.authService.delLocation(data.name,data.lat,data.lng).subscribe(data => {
      console.log("store del");
      window.location.href = ('/del-location');

    });
  }
  //
  ngOnInit(): void {
    this.authService.getLocation().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.Store.push(data[i])
      }
    });
  }

}


