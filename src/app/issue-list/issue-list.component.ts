import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues = [
    {
      id: 1,
      title: 'Rossz a gep',
      place: 'PC6',
      description: 'desc1',
      status: 'NEW',
      updated_at: '2018-11-11'
    },
    {
      id: 2,
      title: 'Rossz a gep',
      place: 'PC6',
      description: 'desc1',
      status: 'DOING',
      updated_at: '2018-11-11'
    },
    {
      id: 3,
      title: 'Rossz a gep',
      place: 'PC6',
      description: 'desc1',
      status: 'DOING',
      updated_at: '2018-11-11'
    },
    {
      id: 4,
      title: 'Rossz a gep',
      place: 'PC6',
      description: 'desc1',
      status: 'DONE',
      updated_at: '2018-11-11'
    },

  ]
  filteredIssues = [];
  selectedStatus = 'DONE';
  selectedIssue = null;

  constructor() { }

  ngOnInit() {
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(issue => issue.status === this.selectedStatus);
  }

  onFilterChange(data) {
    this.selectedStatus = data;
    this.filterIssues();
  }



}
