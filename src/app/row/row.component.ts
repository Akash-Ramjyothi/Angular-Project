import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[appRow]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  [key: string]: any;
  @Input() region!:any;
  @Input() environment!:any;
  @Input() ind!:number

  serverTableData0!:any;
  coherenceTableData0!:any;
  uiTableData0!:any;

  serverTableData1!:any;
  coherenceTableData1!:any;
  uiTableData1!:any;

  showServerTable0: boolean = false;
  showCoherenceTable0: boolean = false;
  showUiTable0: boolean = false;

  showServerTable1: boolean = false;
  showCoherenceTable1: boolean = false;
  showUiTable1: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.serverTableData0 = this.environment[0].data.Server.tableData;
    this.coherenceTableData0 = this.environment[0].data.Coherence.tableData;
    this.uiTableData0 = this.environment[0].data.UI.tableData;
  
    this.serverTableData1 = this.environment[1].data.Server.tableData;
    this.coherenceTableData1 = this.environment[1].data.Coherence.tableData;
    this.uiTableData1 = this.environment[1].data.UI.tableData;
  }

  toggleRows0(tableVariable: string) {
    this.showServerTable0 = false;
    this.showCoherenceTable0 = false;
    this.showUiTable0 = false;
    this[tableVariable] = true;
  }

  toggleRows1(tableVariable: string) {
    this.showServerTable1 = false;
    this.showCoherenceTable1 = false;
    this.showUiTable1 = false;
    this[tableVariable] = true;
  }

}
