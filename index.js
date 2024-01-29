/**
 * Calculates the total cost of all refills.
 * @param {number} pricePerRefill
 * @param {number} refills
 * @returns {number} total cost of all refills
 */
function getTotalCost(pricePerRefill, refills) {
    return pricePerRefill * refills;
  }
  
  /**
   * If the customer has a subscription, apply a 25% discount
   * to the total cost of the refills.
   * @param {number} totalCostWithoutDiscounts
   * @param {boolean} isSubscribed whether the user has a subscription
   * @returns {number} total cost with subscription discount
   */
  function applyDiscount(totalCostWithoutDiscounts, isSubscribed) {
    return totalCostWithoutDiscounts * (isSubscribed ? 0.75 : 1);
  }
  
  /**
   * If the customer has a coupon, apply a $10 discount to
   * the total cost of the refills after the subscription discount.
   * @param {number} costAfterSubscription
   * @param {boolean} hasCoupon whether the customer is using a coupon
   * @returns {number} final cost after applying coupon
   */
  function applyCoupon(costAfterSubscription, hasCoupon) {
    return costAfterSubscription - (hasCoupon ? 10 : 0);
  }
  
  /**
   * Calculates the cost of a subscription based on input values
   * and displays the result on the page.
   */
  function calculateCost() {
    const pricePerRefill = parseFloat(document.querySelector("#price").value);
    const refills = parseInt(document.querySelector("#refills").value);
    const subscription = document.querySelector("#subscribed").checked;
    const coupon = document.querySelector("#coupon").checked;
  
    const output = document.querySelector("#cost");
  
    const initialCost = getTotalCost(pricePerRefill, refills);
    const costAfterSubscription = applyDiscount(initialCost, subscription);
    const finalCost = applyCoupon(costAfterSubscription, coupon);
  
    output.textContent = `$${finalCost.toFixed(2)}`;
  }
  
  // If the code is running in a Node.js environment (CommonJS), export functions
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      getTotalCost,
      applyDiscount,
      applyCoupon,
      calculateCost,
    };
  } else {
    // If the code is running in a browser, add event listener to the "Calculate" button
    const calculateButton = document.querySelector("#calculate");
    calculateButton.addEventListener("click", calculateCost);
  }