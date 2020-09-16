import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countryflag',
  templateUrl: './countryflag.component.html',
  styleUrls: ['./countryflag.component.css']
})

export class CountryflagComponent implements OnInit {
  route = null;
  countryData = '';

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    const countryName = this.route.snapshot.params.name;
    fetch(`http://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => res.json())
      .then(data => {
        this.countryData = data[0];
      });
  }
}
