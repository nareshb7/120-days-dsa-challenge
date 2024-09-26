
var MyCalendar = function() {
    this.events= [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
     let left = 0;
    let right = this.events.length - 1;
    
    // Binary search to find the correct position to insert the event
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        // Check if the event overlaps with the current mid event
        if (start < this.events[mid][1] && this.events[mid][0] < end) {
            return false;  // Overlapping
        }

        // If the current event ends before the new event starts, search right
        if (this.events[mid][1] <= start) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Insert the new event at the correct position (left)
    this.events.splice(left, 0, [start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


// 729. My Calendar I

// Input
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output : [null, true, false, true]

// Explanation
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
// myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.