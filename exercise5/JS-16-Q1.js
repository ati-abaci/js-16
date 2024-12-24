// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.If you have multiple nested elements with event listeners, a click on a child element can trigger event listeners on its parent elements, potentially leading to unexpected behavior.
// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()
