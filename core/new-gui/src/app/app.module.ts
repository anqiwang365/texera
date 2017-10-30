import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomNgMaterialModule } from './common/custom-ng-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/component/workspace.component';
import { WorkflowEditorComponent } from './workspace/component/workflow-editor/workflow-editor.component';
import { NavigationComponent } from './workspace/component/navigation/navigation.component';
import { PropertyEditorComponent } from './workspace/component/property-editor/property-editor.component';
import { OperatorViewComponent } from './workspace/component/operator-view/operator-view.component';
import { ResultViewComponent } from './workspace/component/result-view/result-view.component';
import { OperatorLabelComponent } from './workspace/component/operator-view/operator-label/operator-label.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    WorkflowEditorComponent,
    NavigationComponent,
    PropertyEditorComponent,
    OperatorViewComponent,
    ResultViewComponent,
    OperatorLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,

    FlexLayoutModule,
    CustomNgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
