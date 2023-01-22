Repository for the old website.

# Magic Clock

The Magic Clock reveals the whereabouts of your closest friends and family. It magically* knows where your loved ones are, so you can find them for fun or know when better not to call.
The position of your four friends is shown on an old grandfather clock, where the clock face has been changed to show different locations. The clock hands indicate different friends, each pointing to his/her current location.
The clock is driven by an AtMega8 with a wifi module to receive the data. It gets the data from a webserver which, in return, is regularly updated by your friends' Android and iPhone apps.

*Obviously, the Magic Clock magically knows the the persons' locations. Just to have a backup though, we built mobile clients that can send their current location to the webserver and thus to the Magic Clock. There is an Android app and an iPhone app, both of which contain the same core functionality.

# More details
https://fbrudy.net/projects/magicclock

https://mediainformatics.wordpress.com/2012/07/27/building-interactive-objects-magic-clock/

# Code
Code for the AtMega8: https://github.com/frederikbrudy/magic-clock

Web server: https://github.com/frederikbrudy/magic-clock-grails 

Android app: https://github.com/frederikbrudy/magic-clock-android

iPhone app: https://github.com/frederikbrudy/magic-clock-iphone
