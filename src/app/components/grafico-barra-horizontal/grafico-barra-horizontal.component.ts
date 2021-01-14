import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  @Input() results: any[] = [];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights';

  // intervalo: any;

  constructor() {
    /* const resultados = [...this.results];
    this.intervalo = setInterval(() => {
      console.log('paso');
      for (let i in resultados) {
        resultados[i].value = Math.round(Math.random() * 100);
      }
      this.results = [...resultados];
    }, 1500); */
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }
}
