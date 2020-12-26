import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Shared/admin.service';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor(private AdminData: AdminService, private UserData: UserService) { }

  public themePerRow = 3;
  public themes: any = [];
  ngOnInit(): void {
    // fetching all themes
    let data = this.AdminData.giveThemes();

    let n = Math.ceil(data.length / this.themePerRow);
    this.themes = new Array(n);
    this.themes.forEach(theme => {theme = new Array(this.themePerRow);});

    let row = [];
    let cnt = 0;
    let j = 0;

    for (let i = 0; i < data.length; i++) {
      row.push(data[i]);
      cnt++;
      if (cnt % this.themePerRow === 0) {
        this.themes[j] = row;
        row = [];
        j++;
      }
    }
  }

  public setTheme(theme: String) { this.UserData.setTheme(theme); }
}