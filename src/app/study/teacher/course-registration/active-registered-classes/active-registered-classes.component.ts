import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'active-registered-classes',
  templateUrl: './active-registered-classes.component.html',
  styleUrls: ['./active-registered-classes.component.scss']
})
export class ActiveRegisteredClassesComponent implements OnInit {

  data = [
    {
      name: 'University of gujrat',
      campus: {
        name: 'Marghzar Campus',
        timing: {
          id: '1',
          name: 'Evening',
          program: {
            name: 'BS',
            department: {
              id: '1',
              name: 'Software Engineering',
              session: {
                name: '2017',
                section: {
                  name: 'Section A',
                  semester: {
                    number: 4,
                    course: {
                      id: "1",
                      name: 'Advance Programing techniques',
                      isActive: true
                    }
                  }
                }
              }
            }
          }
        }

      }
    },
    {
      name: 'University of gujrat',
      campus: {
        name: 'Marghzar Campus',
        timing: {
          id: '1',
          name: 'Evening',
          program: {
            name: 'BS',
            department: {
              id: '1',
              name: 'Software Engineering',
              session: {
                name: '2017',
                section: {
                  name: 'Section A',
                  semester: {
                    number: 4,
                    course: {
                      id: "1",
                      name: 'Advance Programing techniques',
                      isActive: true
                    }
                  }
                }
              }
            }
          }
        }

      }
    },
    {
      name: 'University of gujrat',
      campus: {
        name: 'Marghzar Campus',
        timing: {
          id: '1',
          name: 'Evening',
          program: {
            name: 'BS',
            department: {
              id: '1',
              name: 'Software Engineering',
              session: {
                name: '2017',
                section: {
                  name: 'Section A',
                  semester: {
                    number: 4,
                    course: {
                      id: "1",
                      name: 'Advance Programing techniques',
                      isActive: true
                    }
                  }
                }
              }
            }
          }
        }

      }
    }
  ]
  @Output() editClass = new EventEmitter();
  items = [];
  itemsContainer = [];
  constructor() { }

  ngOnInit() {
    this.transformData();
  }
  transformData() {
    this.data.forEach(item => {
      this.items = [];
      this.transformTree(item);
      this.items = this.items.reverse();
      this.itemsContainer.push(this.items);
    });
  }
  transformTree(tree: any) {
    const currentObject = {};
    Object.keys(tree).forEach(k => {
      if (typeof tree[k] === 'object') {
        this.transformTree(tree[k]);
      }
      else {
        tree[k] = k === 'number' ? 'Semester ' + tree[k] : tree[k];
        currentObject[k] = tree[k];
      }
    });
    this.items.push(currentObject);
  }
  delete(_items: []) {
    console.log(_items[_items.length - 1]["id"]);
  }

}
