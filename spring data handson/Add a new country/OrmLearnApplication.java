private static void testAddCountry()
        throws CountryNotFoundException {

    LOGGER.info("Start");

    // Create a new Country object
    Country country = new Country();
    country.setCode("JP");
    country.setName("Japan");

    // Add country to database
    countryService.addCountry(country);

    // Fetch the same country
    Country result =
            countryService.findCountryByCode("JP");

    LOGGER.debug("Country Added = {}", result);

    LOGGER.info("End");
}
