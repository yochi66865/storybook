import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchSelectOptionInput, SearchSelectOption } from './afui-form-select-with-search.model';

@Component({
  selector: 'afui-form-select-with-search',
  templateUrl: './afui-form-select-with-search.component.html',
  styleUrls: ['./afui-form-select-with-search.component.less']
})
export class AfuiFormSelectSearchComponent implements OnChanges{
  @Input() options: SearchSelectOptionInput[];
  @Input() defaultSelectedId: string;
  @Output() selectedValueIdEmitter:  EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputAutoComplete', {read: MatAutocompleteTrigger}) inputAutoComplete: MatAutocompleteTrigger;
  selectSearchControl = new FormControl();
  filteredOptions: Observable<SearchSelectOption[]>;
  selectSearchOptions: SearchSelectOption[];
  defaltValue: string;

  ngOnChanges() {
    this.defaltValue = "";
    this.selectSearchOptions = [];
    this.selectSearchOptions = this.options.map(option => 
      ({...option, isOpen: false})
    );
    if(this.defaultSelectedId) {
      this.selectSearchOptions.forEach(option => {
        if(option.parent.id === this.defaultSelectedId) 
          this.defaltValue = option.parent.value;
        else {
          option.children.forEach(child => {
            if(child.id === this.defaultSelectedId)
              this.defaltValue = child.value;
          })
        }
      });
      this.selectSearchControl.setValue(this.defaltValue);
    }
    this.filteredOptions = this.selectSearchControl.valueChanges.pipe(
      startWith(this.defaltValue),
      map(value => this.filter(value))
    );
  }

  onDropDownClick(event) {
    event.stopPropagation();
    if(this.inputAutoComplete.autocomplete.isOpen) {
      if(!this.selectSearchOptions.includes(this.selectSearchControl.value)) {
        this.selectSearchControl.setValue('');
      }
      this.inputAutoComplete.closePanel();
    } else {
      this.selectSearchControl.setValue('');
      this.inputAutoComplete.openPanel();
    }
  }

  blurInput() {
    this.inputAutoComplete.panelClosingActions
    .subscribe(e => {
      if (!(e && e.source)) {
        this.selectSearchControl.setValue(this.defaltValue);
      }
    })
 
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    this.selectedValueIdEmitter.emit(event.option.value.id);
    this.selectSearchControl.setValue(event.option.value.value);
  }

  openHierarchy(event, option: SearchSelectOption) {
    event.stopPropagation();
    option.isOpen = !option.isOpen;
  }

  private filter(value: string): SearchSelectOption[] {
    const filteredParents = this.selectSearchOptions.filter(option => option.parent.value.includes(value) ||
      option.children.some(child => child.value.includes(value)));
    return filteredParents.map(parent => {
      return {
        parent: parent.parent,
        children: parent.children.filter(child => child.value.includes(value)),
        isOpen: value !== "" ? true: parent.isOpen
      }
    });
  }

}
