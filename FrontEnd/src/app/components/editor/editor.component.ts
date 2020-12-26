import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Ace Editor
import * as ace from 'ace-builds';

// Languages
import 'ace-builds/src-min-noconflict/mode-c_cpp';
import 'ace-builds/src-min-noconflict/mode-java';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/mode-python';

// Themes
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-clouds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-dreamweaver';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-gruvbox';
import 'ace-builds/src-noconflict/theme-idle_fingers';
import 'ace-builds/src-noconflict/theme-iplastic';
import 'ace-builds/src-noconflict/theme-katzenmilch';
import 'ace-builds/src-noconflict/theme-kr_theme';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-merbivore';
import 'ace-builds/src-noconflict/theme-merbivore_soft';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-mono_industrial';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/theme-pastel_on_dark';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-sqlserver';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/theme-xcode';

// External Features
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

// Services
import { AdminService } from 'src/app/Shared/admin.service';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  @ViewChild('codeEditor', { static: true }) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;
  
  public modes;
  public themes;

  private selected_theme: String;
  private selected_mode: String;
  
  constructor(private AdminData: AdminService, public UserData: UserService) { }

  // Configurations options
  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 14,
      maxLines: Infinity
    };

    const extraEditorOptions = {
      enableBasicAutocompletion: true
    };
    
    const mergedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return mergedOptions;
  }
  
  public setTheme(theme: any) {
    if(!theme)
      theme = this.UserData.giveTheme();
      // console.log(theme);
    this.codeEditor.setTheme(`ace/theme/${theme}`);
  }
  public setMode(mode: any) {
    if(!mode)
      this.UserData.giveMode();
    this.codeEditor.getSession().setMode(`ace/mode/${mode}`);
  }
  
  ngOnInit(): void {
    this.UserData.currentData.subscribe(data => {
      console.log(data);
    });

    // Pre-reqs
    this.modes = this.AdminData.giveModes();
    this.themes = this.AdminData.giveThemes();

    this.selected_mode = this.UserData.giveMode();
    this.selected_theme = this.UserData.giveTheme();

    ace.require('ace/ext/language_tools');
    this.editorBeautify = ace.require('ace/ext/beautify');

    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions: Partial<ace.Ace.EditorOptions> = this.getEditorOptions();

    // Configuration
    this.codeEditor = ace.edit(element, editorOptions);

    // Theme
    this.setTheme(this.selected_theme);
    // Language
    this.setMode(this.selected_mode);

    // for the scope fold feature
    this.codeEditor.setShowFoldWidgets(true);

    // Font-Size
    element.style.fontSize='18px';
  }

  public beautifyContent() {
    if (this.codeEditor && this.editorBeautify) {
      const session = this.codeEditor.getSession();
      this.editorBeautify.beautify(session);
    }
  }


  public clearCode() {this.codeEditor.setValue('');}
  public getCode() {return this.codeEditor.getValue();}
}