function debounce(callback, delay, immediate = false) {
    let timeout;

    return function (...args) {
        const context = this;
        
        const later = () => {
            timeout = null;
            callback.apply(context, args);  // Call with latest args after delay
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);  // Clear any existing timer
        timeout = setTimeout(later, delay);

        if (callNow) {
            callback.apply(context, args);  // Call immediately on first call
        }
    };
}
  
  module.exports = debounce;
