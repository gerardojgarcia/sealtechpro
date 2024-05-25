<script setup>
const solarPanelCount = ref(0);
const birdProofing = ref(false);
const subscription = ref(false);

//Quote  Total Calculation

const quoteTotal = computed(() => {
  let total = 0;
  if (solarPanelCount.value <= 10) {
    total = solarPanelCount.value * 45;
  } else if (solarPanelCount.value <= 16) {
    total = solarPanelCount.value * 42;
  } else {
    total = solarPanelCount.value * 39;
  }

  if (birdProofing.value) {
    total += (solarPanelCount.value * 10); // Add the cost of bird-proofing
  }

  if (subscription.value) {
    total +=  (total * 0.75); // Add the cost of subscription
  }

  return total.toFixed(2);
});
</script>
<template>
  <div class="dark:bg-black py-16 dark:text-white">
    <TheHeader />
    <AppSubpageHero title="Quote" />

    <div class="py-32 dar:text-white grid place-items-center">
      <h1 class="text-5xl mb-8">Quote</h1>
      <p class="quote-sub-heading text-xl pb-16">
        Get a quote book your solar panel cleaning in less than 60 seconds!
      </p>

      <div class="quote-container p-4 md:p-32 border-2 rounded-lg">
        <form class="booking-form flex flex-col self-center space-y-6">
            <div class="form-group">
                <label for="name">Name:</label>
                <input
                type="text"
                id="name"
                v-model="customerName"
                class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                required
                placeholder="Your Name"
                />  
            </div>
       
          <div class="form-group">
            <label for="address">Address:</label>
            <input
              type="text"
              id="address"
              v-model="customerAddress"
              class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
              required
              placeholder="123 Main St"
            />
            
          </div>

          <div class="form-group">
            <label for="city">City:</label>
            <input
                type="text"
                id="city"
                v-model="customerCity"
                class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                required
                placeholder="Your City"
            />
        </div>
        <div class="form-group">
            <label for="zip-code">Zip Code:</label>
            <input
                type="text"
                id="zip-code"
                v-model="customerZipCode"
                class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                required
                placeholder="Your Zip Code"
            />
        </div>
          <div class="form-group">
            <label for="solar-panel-count" class="text-xl">Number of Solar Panels:</label>
            <input
              type="number"
              id="solar-panel-count"
              v-model="solarPanelCount"
              class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
            />
          </div>
          <div class="form-group">
            <label for="booking-date">Booking Date:</label>
            <input
              type="date"
              id="booking-date"
              v-model="bookingDate"
              class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
              required
            />
          </div>

          <div class="form-group space-y-8">
            <strong  class="text-3xl">Additional Services:</strong>
            <div class="flex">
              <div class="form-group flex flex-col items-center w-1/2">
                <Icon name="ri:shield-check-line" class="text-5xl" />
                <label for="bird-proofing" class="text-xl">Bird-proofing:</label>
                <input
                  type="checkbox"
                  id="bird-proofing"
                  v-model="birdProofing"
                  class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                />
              </div>
              <div class="form-group flex flex-col items-center space-y-2 w-1/2">
                <Icon name="ri:calendar-check-fill" class="text-5xl" />
                <label for="subscription" class="text-xl">Subscribe & Save*</label>
                <input
                  type="checkbox"
                  id="bird-proofing"
                  v-model="subscription"
                  class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <p class="text-lg">{{ solarPanelCount }} panels</p>
            <p v-if="birdProofing == true" class="text-lg">Bird-proofing: ${{ solarPanelCount * 10 }}</p>


          </div>
          <!-- ... -->
          <strong>Total: ${{ quoteTotal }}</strong>
          <p v-if="subscription == true">Pay in advance and save 25% off your second booking</p>
          <!-- ... -->

          <button
            type="submit"
            class="hero-quote bg-blue-400 hover:bg-blue-300 hover:text-black p-2 rounded-md duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<style scoped>
label {
  margin-right: 1rem;
}
</style>
