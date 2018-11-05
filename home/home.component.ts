import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //   public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartType = 'line';
  // public pieChartType = 'pie';

  // lineChart: any;
  // public lineChartData: Array<any> = [
  //  [65, 59, 80, 81, 56, 55, 40],
  //  [28, 48, 40, 19, 86, 27, 90]
  // ];
  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: any = 'polarArea';

  Pie: any;
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: any = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // public randomizeType(): void {
  //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  // }

  // public chartClicked1(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered1(e: any): void {
  //   console.log(e);
  // }

  // events
  public chartClicked1(e: any): void {
    console.log(e);
  }

  public chartHovered1(e: any): void {
    console.log(e);
  }
}


