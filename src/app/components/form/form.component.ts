import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() selectedParams = new EventEmitter<any>();

  public selectedCategory: string = 'general';
  public selectedCountry: string = 'ar';

  public categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Negocios' },
    { value: 'entertainment', name: 'Entretenimiento' },
    { value: 'health', name: 'Salud' },
    { value: 'science', name: 'Ciencia' },
    { value: 'sports', name: 'Deportes' },
    { value: 'technology', name: 'Tecnología' },
  ];

  public countries: any[] = [
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungria' },
    { value: 'mx', name: 'Mexico' },
    { value: 'gb', name: 'Reino Unido' },
  ];
  constructor() {}

  ngOnInit(): void {}

  public searchNews() {
    const PARAMS = {
      category: this.selectedCategory,
      country: this.selectedCountry,
    };

    this.selectedParams.emit(PARAMS);
  }
}
