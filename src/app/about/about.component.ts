import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div class="btn-group" dropdown>
  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
          aria-controls="dropdown-basic">
    Button dropdown <span class="caret"></span>
  </button>
  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
      role="menu" aria-labelledby="button-basic">
    <li role="menuitem"><a class="dropdown-item" href="#">History of the Park</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Meet the Founders</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Meet Our Animals</a></li>
    <li class="divider dropdown-divider"></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Careers</a>
    </li>
  </ul>
</div>
`
})
export class AboutComponent {}
