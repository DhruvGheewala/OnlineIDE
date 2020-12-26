import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  // @ViewChild('archiveTable', {static: true}) archiveElmRef: ElementRef;

  constructor(private UserData: UserService) { }

  public codes;
  ngOnInit(): void {this.codes = this.UserData.giveCodes();}

  // $(document).ready(function () {
  //   $('#dtBasicExample').DataTable();
  //   $('.dataTables_length').addClass('bs-select');
  //   });
}
