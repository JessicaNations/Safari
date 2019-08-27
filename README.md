# Safari
# DASHBOARD/EVENTS
*   welcome page
*   maybe animal gif/carousel
- not resizing :(
- style="display: block; width: 100%;"
*   maybe upcoming holiday/event carousel
*   instagram carousel? do they moderate that?
# EVENTS (maybe make this the dashboard)
*   new and upcoming attractions
*   If current month == month from range, display the holidays in the specified range.
## Counts the number of upcoming holidays to fetch:
*   moment().nextHolidays(5).isHoliday();
## easy way
*   display all dates for each holiday
*   moment.holiday(Christmas);
*   and format the date
## complicated way
*   Create an array of each holiday to be displayed
*   If holiday in date range is in the array, display it?
- <container-element [ngSwitch]=”var now = moment().month()”>
- <some-element *ngSwitchCase=”1”>  
- moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
- </some-element>
- </container-element>
*   etc
- moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
- moment().holidaysBetween(moment(‘2/1’ | ‘5/31’));
- moment().holidaysBetween(moment(‘3/1’ | ‘6/30’));
- moment().holidaysBetween(moment(‘4/1’ | ‘7/31’));
- moment().holidaysBetween(moment(‘5/1’ | ‘8/31’));
- moment().holidaysBetween(moment(‘6/1’ | ‘9/30’));
- moment().holidaysBetween(moment(‘7/1’ | ‘10/31’));
- moment().holidaysBetween(moment(‘8/1’ | ‘11/30’));
- moment().holidaysBetween(moment(‘9/1’ | ‘12/31’));
- moment().holidaysBetween(moment(‘10/1’ | ‘1/31’));
- moment().holidaysBetween(moment(‘11/1’ | ‘2/28’));
# ADMISSION (offer email subscription at ticket purchase)
*   Adults
*   Kids
*   Feed cups
*   Bird feed sticks
*   Deer enclosure
*   Pony rides
*   Hayrides
*   Concessions
# VISIT
*   Hours
- entrance to the park ends at 4:30
- park closes at 5
*   Map
*   Groups
- parties
- school tours
*   Accessibility
- wheel-chair access
*   Park Policies
- animal encounters
- park security
- no pets
- no outside food
# ABOUT
*   Historical blurb
*   Meet the owners
*   Animals for your event
*   Meet our animals 
- (tour of heroes)
*   Hiring/”Careers”
# SUPPORT
*   donations
*   free t-shirts?
*   volunteer?
# ERRORS
## angular.json “styles” removed:
*   "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
*   "./node_modules/bootstrap/dist/css/bootstrap.min.css",
## Check on this:
*   polyfills.ts
*   Required for Stackblitz*   
*   import 'core-js/es7/reflect';
## 8/27/19 Browser Errors:
*   Angular is running in the development mode. 
- Call enableProdMode() to enable the production mode.
*   null:1 Failed to load resource: 
- the server responded with a status of 404 (Not Found)
*   api/admissions/admissions.json:1 Failed to load resource: 
- the server responded with a status of 404 (Not Found)
*   admission.service.ts:41 Server returned code: 404, error message is:
- Http failure response for http://localhost:4200/api/admissions/admissions.json: 404 Not Found
## 8/27/19 Stackblitz Errors:
*   Error in /turbo_modules/@angular/compiler@8.0.3/bundles/compiler.umd.js(2479:21)
*   Can't resolve all parameters for ApplicationModule: (?).
