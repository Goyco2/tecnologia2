import { Component, OnInit } from '@angular/core';

declare var google: any; // Dichiara la variabile google

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    // Verifica che la libreria Google Maps sia caricata
    if (typeof google !== 'undefined') {
      this.initMap();  // Inizializza la mappa se google è disponibile
    } else {
      console.error('Google Maps API non è stata caricata correttamente.');
    }
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: 40.730610, lng: -73.935242 },  // Posizione iniziale (New York)
      zoom: 12
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Aggiungi un marker alla mappa
    const marker = new google.maps.Marker({
      position: { lat: 40.730610, lng: -73.935242 },
      map: map,
      title: 'New York'
    });
  }
}
