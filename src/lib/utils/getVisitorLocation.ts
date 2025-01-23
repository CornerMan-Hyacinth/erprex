async function getVisitorLocation() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const locationData = await response.json();
    return locationData.country_name;
  } catch (error) {
    console.error("Location fetch failed", error);
  }
}

export default getVisitorLocation;
