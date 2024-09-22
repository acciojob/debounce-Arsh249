function debounce(callback, delay, immediate = false) {
   let timeout;
    let lastArgs;

    return function (...args) {
        const context = this;
        lastArgs = args;  // Store the latest arguments

        const later = () => {
            timeout = null;
            if (!immediate) callback.apply(context, lastArgs);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, delay);

        if (callNow) {
            callback.apply(context, args);  // Call immediately with the current arguments
        }
    };
  }
  
  module.exports = debounce;
