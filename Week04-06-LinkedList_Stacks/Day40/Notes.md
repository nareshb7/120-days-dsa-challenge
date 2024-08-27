# Notes for Day 40: Online Stock Span

## Approach

- Use a stack to keep track of the indices of the days.
- Iterate over the list of prices.
- For each price, pop elements from the stack while the stack is not empty and the current price is greater than or equal to the price at the index stored on top of the stack.
- The span for the current day will be the difference between the current day index and the index at the top of the stack after popping.
- Push the current day index onto the stack.
- return the span

## Complexity

- `Time Complexity O(n):` Each element is pushed and popped from the stack at most once, so the overall time complexity is linear with respect to the number of stock prices.
- `Space Complexity O(n):` The space complexity is also linear because, in the worst case, all elements could be stored in the stack.

## Key Learnings:

- `Stack Usage:` Stacks are useful for problems where you need to compare elements in a sequential manner and keep track of the elements that haven't yet found their "match" or "span."
- `Efficient Calculation:` Instead of checking all previous days for each price (which would result in O(n^2) time complexity), you can use a stack to efficiently find the span for each day in O(1) amortized time.
- `Span Definition:` The stock span of a price is the count of consecutive days (including the current day) where the stock price was less than or equal to the price on that day.
- `Handling Edge Cases:` If the stack is empty after popping elements, it means the current price is the highest seen so far, and the span is equal to the day index + 1.
- `Monotonic Stack Concept:` The stack maintains a decreasing order of prices, which helps in quickly calculating spans by popping elements until a higher price is found.
- `Real-world Application:` This problem is similar to real-world financial applications, such as calculating the span of stock prices, which is a common task in financial analysis and trading algorithms
