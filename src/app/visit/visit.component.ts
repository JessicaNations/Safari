import { Component } from '@angular/core';

@Component({
  selector: 'app-visit',
  template: `<div class="btn-group" dropdown>
  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
          aria-controls="dropdown-basic">
    Button dropdown <span class="caret"></span>
  </button>
  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
      role="menu" aria-labelledby="button-basic">
    <li role="menuitem"><a class="dropdown-item" href="#">Hours</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Map</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Accessibility</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Park Policies</a></li>
    <li class="divider dropdown-divider"></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Groups</a>
    </li>
  </ul>
</div>`
})
export class VisitComponent {}
