<script setup>
useHead({
    title: "Get a free quote on concrete sealing services",
    description: "Get a quick on on all our services",
});

const totalSqFt = ref(0);
const epoxySealing = ref(false);
const polySealing = ref(false);
const peneSealing = ref(false);
const decoSealing = ref(false);
const wbSealing = ref(false);
const antiSlipSealing = ref(false);
const maintReseal = ref(false);

//Quote  Total Calculation

const quoteTotal = computed(() => {
    let total = 0;
    if (epoxySealing.value == true) {
        total = totalSqFt.value * 1.35;
    } else if (polySealing.value == true) {
        total = totalSqFt.value * 1.75;
    } else if (decoSealing.value == true) {
        total = totalSqFt.value * 2.35;
    } else total = 0;

    if (antiSlipSealing.value) {
        total += totalSqFt.value * 3.5; // Add the cost of bird-proofing
    }

    if (maintReseal.value) {
        total += totalSqFt.value * 0.75; // Add the cost of subscription
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
                Get a quote book your concrete sealing service in less than 60
                seconds!
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
                        <label for="total-sq-ft" class="text-xl"
                            >Sq. Ft.:</label
                        >
                        <input
                            type="number"
                            id="total-sq-ft"
                            v-model="totalSqFt"
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
                        <strong class="text-3xl"> Services:</strong>
                        <p>
                            All services include surface preparation and crack
                            and joint repair prior to sealing
                        </p>

                        <!--Form Inputs-->
                        <div
                            class="grid md:grid-cols-3 gap-4 place-content-center"
                        >
                            <div
                                class="form-group flex flex-col items-center w-1/2"
                            >
                                <Icon
                                    name="ri:shield-check-line"
                                    class="text-5xl"
                                />
                                <label for="epoxy-sealing" class="text-xl"
                                    >Epoxy Sealing:</label
                                >
                                <input
                                    type="checkbox"
                                    id="epoxy-sealing"
                                    v-model="epoxySealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>
                            <div
                                class="form-group flex flex-col items-center space-y-2 w-1/2"
                            >
                                <Icon
                                    name="ri:calendar-check-fill"
                                    class="text-5xl"
                                />
                                <label
                                    for="Polyurethane Sealing"
                                    class="text-xl"
                                    >Polyurethane Sealing</label
                                >
                                <input
                                    type="checkbox"
                                    id="poly-sealing"
                                    v-model="polySealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>
                            <div
                                class="form-group flex flex-col items-center space-y-2 w-1/2"
                            >
                                <Icon
                                    name="ri:calendar-check-fill"
                                    class="text-5xl"
                                />
                                <label for="penetrating-sealing" class="text-xl"
                                    >Penetrating Sealing</label
                                >
                                <input
                                    type="checkbox"
                                    id="penetrating-sealing"
                                    v-model="peneSealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>
                            <div
                                class="form-group flex flex-col items-center space-y-2 w-1/2"
                            >
                                <Icon
                                    name="ri:calendar-check-fill"
                                    class="text-5xl"
                                />
                                <label for="acrylic-sealing" class="text-xl"
                                    >Acrylic Sealing</label
                                >
                                <input
                                    type="checkbox"
                                    id="acrylic-sealing"
                                    v-model="acrySealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>
                            <div
                                class="form-group flex flex-col items-center space-y-2 w-1/2"
                            >
                                <Icon
                                    name="ri:calendar-check-fill"
                                    class="text-5xl"
                                />
                                <label for="wb-sealing" class="text-xl"
                                    >Water-Based Sealing</label
                                >
                                <input
                                    type="checkbox"
                                    id="wb-sealing"
                                    v-model="wbSealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>
                            <div
                                class="form-group flex flex-col items-center space-y-2 w-1/2"
                            >
                                <Icon
                                    name="ri:calendar-check-fill"
                                    class="text-5xl"
                                />
                                <label for="deco-sealing" class="text-xl"
                                    >Decorative Sealing</label
                                >
                                <input
                                    type="checkbox"
                                    id="deco-sealing"
                                    v-model="decoSealing"
                                    class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                />
                            </div>

                            <div>
                                <strong class="text-2xl mb-8">Add-Ons</strong>
                                <div class="flex">
                                    <div
                                        class="form-group flex flex-col items-center space-y-2 w-1/2"
                                    >
                                        <Icon
                                            name="ri:calendar-check-fill"
                                            class="text-5xl"
                                        />
                                        <label for="anti-slip" class="text-xl"
                                            >Anti-Slip Treatment</label
                                        >
                                        <input
                                            type="checkbox"
                                            id="anti-slip"
                                            v-model="antiSlipSealing"
                                            class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                        />
                                    </div>

                                    <div
                                        class="form-group flex flex-col items-center space-y-2 w-1/2"
                                    >
                                        <Icon
                                            name="ri:calendar-check-fill"
                                            class="text-5xl"
                                        />
                                        <label
                                            for="maint-reseal"
                                            class="text-xl"
                                            >Maintenance & Re-Sealing</label
                                        >
                                        <input
                                            type="checkbox"
                                            id="maint-reseal"
                                            v-model="maintReseal"
                                            class="dark:bg-gray-800 dark:text-white rounded-lg p-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <p class="text-lg">{{ totalSqFt }} sq. ft.</p>
                        <p v-if="antiSlipSealing == true" class="text-lg">
                            Anti-Slip Sealing: ${{ total * 10 }}
                        </p>
                    </div>
                    <!-- ... -->
                    <strong>Total: ${{ quoteTotal }}</strong>
                    <p v-if="maintReseal == true">
                        Pay in advance and save 25% off your second booking
                    </p>
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
