
var MyCalendarTwo = function() {
    this.single =[];
    this.doubleBooked = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    // Check for triple booking by overlapping with double booked intervals
    for (let [s, e] of this.doubleBooked) {
        if (Math.max(start, s) < Math.min(end, e)) {
            return false; // Triple booking detected
        }
    }
    
    // Add overlapping parts to double bookings
    for (let [s, e] of this.single) {
        if (Math.max(start, s) < Math.min(end, e)) {
            this.doubleBooked.push([Math.max(start, s), Math.min(end, e)]);
        }
    }
    
    // Add the event to single bookings
    this.single.push([start, end]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

// 731. My Calendar II


// Input
// ["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// Output : [null, true, true, true, false, true, true]

// Explanation
// MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
// myCalendarTwo.book(10, 20); // return True, The event can be booked. 
// myCalendarTwo.book(50, 60); // return True, The event can be booked. 
// myCalendarTwo.book(10, 40); // return True, The event can be double booked. 
// myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
// myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
// myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.