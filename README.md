# Safari
# DASHBOARD/CALENDAR
* Welcome page
* Title header
* Nav bar
* With tabs:
    * Dashboard
    * Calendars (Events)
    * Admission
    * Visit
    * About
    * Support
* Animal gif/carousel
* ?instagram carousel? do they moderate that?
    * Not resizing :(
    * style="display: block; width: 100%;"
    * Center it!
* Blocks of Upcoming holidays/events
* Search Calendar/Events
# EVENTS (maybe make this the dashboard)
* New and upcoming attractions
* If current month == month from range, display the holidays in the specified range.
## Counts the number of upcoming holidays to fetch:
* moment().nextHolidays(5).isHoliday();
## easy way
* display all dates for each holiday
* moment.holiday(Christmas);
* and format the date
## complicated way
* Create an array of each holiday to be displayed
* If holiday in date range is in the array, display it?
    * <container-element [ngSwitch]=”var now = moment().month()”>
    * <some-element *ngSwitchCase=”1”>  
    * moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
* etc
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
* Adults
* Kids
* Feed cups
* Bird feed sticks
* Deer enclosure
* Pony rides
* Hayrides
* Concessions
# VISIT
* Hours
* Monday: 10am - 5pm [format]
* Hide info until it's the relevant time of day/year? 
    * With a button to reveal it
    * Entrance to the park ends at 4:30
    * Park closes at 5
    * Special holiday hours
* Map
    * Easy and clear: either google link img
    * Or minimalist line drawing
    * Picture of the the park entrance
    * ?Picture of the street view in google maps?
* Groups
    * parties
    * school tours
    * modals and steppers
* Accessibility
    * wheel-chair access
    * Input box for access suggestions
* Park Policies
    * animal encounters
    * park security
    * no pets
    * no outside food
# ABOUT
* Historical blurb
* Meet the owners
* Animals for your event
    * Modals and steppers
* Meet our animals 
    * (tour of heroes table)
* Hiring/”Careers”
# SUPPORT
* donations
* volunteer
# ERRORS
## angular.json “styles” removed:
* "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
* "./node_modules/bootstrap/dist/css/bootstrap.min.css",
## Check on this:
* polyfills.ts
* Required for Stackblitz*   
* import 'core-js/es7/reflect';
## 8/28/19 Stackblitz Errors:
* Error in /turbo_modules/@angular/compiler@8.0.3/bundles/compiler.umd.js(2479:21)
* Can't resolve all parameters for ApplicationModule: (?).
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
## 8/28/19 Angular Material:
* Installed all the getting started and other things
* Tried to make a Material Module and was unsuccessful
* It appears to be working when it's by itself
    * but it doesn't work existing page content
* Ang Material is very simple
    * ADD STYLING
## Angular-tour-of-heroes by John Papa
* Doesn't have as many issues as mine
    * but I still messed up the spacing on the list of heroes
## 8/28/19 Images:
![Dashboard](https://github.com/JessicaNations/Safari/blob/master/src/assets/images/8-28Dashboard.png)
![Calendars](https://github.com/JessicaNations/Safari/blob/master/src/assets/images/8-28Calendars.png)
