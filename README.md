# Safari
# DASHBOARD/CALENDAR
*   welcome page
*   maybe animal gif/carousel
    * not resizing :(
    * style="display: block; width: 100%;"
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
    * <container-element [ngSwitch]=”var now = moment().month()”>
    * <some-element *ngSwitchCase=”1”>  
    * moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
*   etc
    * moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
    * moment().holidaysBetween(moment(‘2/1’ | ‘5/31’));
    * moment().holidaysBetween(moment(‘3/1’ | ‘6/30’));
    * moment().holidaysBetween(moment(‘4/1’ | ‘7/31’));
    * moment().holidaysBetween(moment(‘5/1’ | ‘8/31’));
    * moment().holidaysBetween(moment(‘6/1’ | ‘9/30’));
    * moment().holidaysBetween(moment(‘7/1’ | ‘10/31’));
    * moment().holidaysBetween(moment(‘8/1’ | ‘11/30’));
    * moment().holidaysBetween(moment(‘9/1’ | ‘12/31’));
    * moment().holidaysBetween(moment(‘10/1’ | ‘1/31’));
    * moment().holidaysBetween(moment(‘11/1’ | ‘2/28’));
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
    * entrance to the park ends at 4:30
    * park closes at 5
*   Map
*   Groups
    * parties
    * school tours
*   Accessibility
    * wheel-chair access
*   Park Policies
    * animal encounters
    * park security
    * no pets
    * no outside food
# ABOUT
*   Historical blurb
*   Meet the owners
*   Animals for your event
*   Meet our animals 
    * (tour of heroes)
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
## 8/27/19 Stackblitz Errors:
*   Error in /turbo_modules/@angular/compiler@8.0.3/bundles/compiler.umd.js(2479:21)
*   Can't resolve all parameters for ApplicationModule: (?).
## Could not find module “@angular-devkit/build-angular”
* npm install --save-dev @angular-devkit/build-angular
## 8/28/19 Errors
* Angular is running in the development mode. Call enableProdMode() to enable the production mode.
* 2null:1 Failed to load resource: the server responded with a status of 404 (Not Found)
* vendor.js:131575 [WDS] Disconnected!
* close @ vendor.js:131575
* sockjs-node/info?t=1567006314872:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
* sockjs-node/info?t=1567006320980:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
* sockjs-node/info?t=1567006329069:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
* sockjs-node/info?t=1567006341178:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
* sockjs-node/info?t=1567006363026:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
* sockjs-node/info?t=1567006402026:1 Failed to load resource: net::ERR_CONNECTION_REFUSED
## 8/28/19 Images:
<img src="/assets/images/8-28Dashboard.png">
<img src="/images/8-28Calendars.png">
![Dashboard](/src/assests/images/8-28Dashboard.png "Dashboard")
![Calendars](/src/assests/images/8-28Calendars.png "Calendars")
