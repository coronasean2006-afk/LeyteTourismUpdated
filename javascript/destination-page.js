const commonsImage = (file, width = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const destinationStories = [
  {
    name: "Kalanggaman Island",
    city: "Palompon",
    category: "Island",
    image: "Sunrise in Kalanggaman Island.jpg",
    summary: "A white-sand island escape known for its long sandbars, blue shallows, and open-sea calm.",
    history: "Kalanggaman grew from a quiet local island into one of Leyte's best-known tourism symbols because of its striking sandbars. Its name is often linked to the Cebuano word for bird, a nod to the island's wing-like shape when seen from above.",
    facts: [
      "The island is uninhabited, so most visits are day trips or regulated overnight camping.",
      "Its sandbars shift subtly with tide and weather, which is part of the island's changing look.",
      "Palompon's local tourism office manages visits to help protect the island from overcrowding."
    ],
    fee: "Fees vary by residency and package; coordinate with Palompon Tourism.",
    hours: "Day trips commonly run during daylight hours.",
    activities: "Swim in clear water, walk the sandbar, snorkel, kayak, camp by permit, and photograph sunrise or sunset.",
    bestTime: "Dry months from March to May, or any calm-sea day.",
    travelTips: "Reserve with the local tourism office, bring drinking water, use reef-safe sun protection, and keep trash off the island."
  },
  {
    name: "Cuatro Islas",
    city: "Inopacan and Hindang",
    category: "Island",
    image: "Crystal clear blue waters.jpg",
    summary: "A four-island route for travelers who want beach hopping, snorkeling water, and relaxed coastal scenery.",
    history: "Cuatro Islas means Four Islands in Spanish. The group includes Digyo, Mahaba, Apid, and Himokilan, with local communities and tourism offices shaping it into a managed island-hopping destination.",
    facts: [
      "Three islands are commonly associated with Inopacan, while Himokilan belongs to Hindang.",
      "Digyo is often the most visited because of its small-island sand and accessible picnic areas.",
      "The islands are part of Leyte's western coast, giving them a calmer, rural feel than larger resort strips."
    ],
    fee: "Boat and environmental fees apply; rates depend on group size.",
    hours: "Best visited in daylight with registered boat operators.",
    activities: "Go island hopping, swim, snorkel, picnic on the beach, and take coastal photos.",
    bestTime: "Calm seas, especially from March to early June.",
    travelTips: "Start early from Inopacan, bring cash for fees, and keep valuables in a dry bag."
  },
  {
    name: "Lake Danao Natural Park",
    city: "Ormoc City",
    category: "Mountain",
    image: "Lake Danao.jpg",
    summary: "A cool upland lake where visitors slow down with forest air, floating cottages, and quiet water.",
    history: "Lake Danao is a volcanic lake in Ormoc's highlands and forms the heart of a protected natural park. Its cool elevation made it a favorite escape from the warmer coast and a local source of nature-based recreation.",
    facts: [
      "The lake is often described as guitar-shaped because of its outline.",
      "Its upland setting makes the weather cooler than central Ormoc.",
      "The park supports kayaking, floating cottages, and picnic activities while preserving the watershed."
    ],
    fee: "Local entrance and activity fees may apply.",
    hours: "Typically open during daytime park hours.",
    activities: "Kayak, ride floating cottages, picnic, fish where allowed, and enjoy nature viewing.",
    bestTime: "Morning to early afternoon for clearer light and gentler weather.",
    travelTips: "Bring a jacket or rain layer because upland weather can shift quickly."
  },
  {
    name: "MacArthur Landing Memorial",
    city: "Palo",
    category: "Historical Site",
    image: "MacArthur Landing Memorial National Park in Leyte.jpg",
    summary: "A major World War II memorial marking the Allied return to the Philippines in 1944.",
    history: "The memorial commemorates General Douglas MacArthur's landing at Red Beach on October 20, 1944, during the campaign to liberate the Philippines from Japanese occupation. The bronze figures and open lagoon make the event visible in public memory.",
    facts: [
      "The landing is connected to MacArthur's famous promise to return to the Philippines.",
      "The larger Leyte Gulf campaign was one of the defining military moments of World War II in the Pacific.",
      "The site is both a tourist attraction and a place of remembrance for veterans, families, and students."
    ],
    fee: "Usually free; museum or nearby facilities may have separate fees.",
    hours: "Open-air site, best visited during daylight.",
    activities: "View the monument, visit nearby heritage stops, take photographs, and reflect on Leyte's wartime history.",
    bestTime: "Late afternoon for softer light over the memorial lagoon.",
    travelTips: "Treat the area as a memorial space and pair the visit with Palo Cathedral or Red Beach."
  },
  {
    name: "San Juanico Bridge",
    city: "Tacloban City",
    category: "Historical Site",
    image: "San Juanico Bridge.2024.jpg",
    summary: "Leyte's iconic bridge crossing the San Juanico Strait toward Samar.",
    history: "Completed in 1973, San Juanico Bridge became a landmark of Eastern Visayas and a powerful visual connection between Leyte and Samar. Its sweeping curves and water views made it a favorite subject for photographers and travelers.",
    facts: [
      "The bridge stretches over two kilometers across the San Juanico Strait.",
      "Its steel truss and arch spans create the famous curved silhouette seen from Tacloban viewpoints.",
      "It forms part of the Pan-Philippine Highway, so it is both scenic and practical."
    ],
    fee: "No entrance fee.",
    hours: "Accessible all day; viewpoints are best in daylight or early evening.",
    activities: "Take a scenic drive, photograph the bridge, watch sunset, and view the strait and islets.",
    bestTime: "Sunrise, sunset, or blue hour for dramatic bridge views.",
    travelTips: "Use safe viewing areas and avoid stopping in unsafe road sections."
  },
  {
    name: "Canigao Island",
    city: "Matalom",
    category: "Beach",
    image: "Canigao Island located at Matalom, Leyte.jpg",
    summary: "A quick island getaway off Matalom with white sand, swimming water, and easy beach energy.",
    history: "Canigao Island has long been a beloved local escape for residents of southern Leyte island towns. Its accessibility by boat from Matalom helped it become a popular weekend destination.",
    facts: [
      "The island is small enough for a leisurely shoreline walk.",
      "It is often visited as a day trip, though simple overnight stays may be available depending on local rules.",
      "Its waters are best enjoyed when the sea is calm and visibility is clear."
    ],
    fee: "Entrance, boat, and cottage fees may apply.",
    hours: "Day trips depend on boat schedules and sea conditions.",
    activities: "Swim, snorkel, walk the shore, picnic, and enjoy simple beach cottages.",
    bestTime: "Weekday mornings during calm weather.",
    travelTips: "Confirm return boat times before leaving the mainland and bring enough cash for small fees."
  },
  {
    name: "Mahagnao Volcano Natural Park",
    city: "Burauen",
    category: "Adventure",
    image: "Bondari Peak.jpg",
    summary: "A highland ecotourism area with crater lakes, forest trails, springs, and volcanic landscapes.",
    history: "Mahagnao Volcano Natural Park protects an inactive volcanic landscape around Burauen, La Paz, and MacArthur. Its lakes, springs, forest, and thermal features made it one of Leyte's richest inland nature destinations.",
    facts: [
      "The park is associated with crater lakes, including lakes near the Mahagnao volcanic system.",
      "Burauen is often called the Spring Capital of Leyte because of its many water sources.",
      "The area supports camping and guided trails, making it ideal for travelers who want more than beach scenery."
    ],
    fee: "Local park, guide, and activity fees may apply.",
    hours: "Coordinate visits during daytime with Burauen tourism staff.",
    activities: "Hike, camp, visit lakes and springs, watch birds, and photograph forest scenery.",
    bestTime: "Dryer weeks and clear mornings are best for trail comfort.",
    travelTips: "Use guides, wear trail shoes, and check road conditions before going."
  },
  {
    name: "Masaba Falls",
    city: "Matag-ob",
    category: "Waterfall",
    image: "The Lush Tagbo Falls.jpg",
    summary: "A quieter waterfall stop for travelers looking for cool water and rural inland scenery.",
    history: "Masaba Falls is part of Matag-ob's inland nature appeal. Like many local waterfalls in Leyte, it is shaped by community access, seasonal water flow, and visitors who prefer less-crowded natural stops.",
    facts: [
      "Waterfall flow can change a lot depending on recent rain.",
      "Local advice is important because trail and swimming conditions are seasonal.",
      "The trip adds contrast to western Leyte itineraries that usually focus on islands and beaches."
    ],
    fee: "Local guide or entrance fees may apply.",
    hours: "Best visited in daylight.",
    activities: "Take a short hike, view the falls, swim only when safe, and enjoy the shaded setting.",
    bestTime: "After light rains for stronger flow, avoiding stormy weather.",
    travelTips: "Ask locals about trail conditions and avoid swimming near strong falls after heavy rain."
  },
  {
    name: "Hindang Caves and Wild Monkeys",
    city: "Hindang",
    category: "Adventure",
    image: "View on the North Side.jpg",
    summary: "A cave-and-nature side trip with limestone scenery and wildlife encounters.",
    history: "Hindang's cave area became a local adventure stop because it combines accessible limestone features with a natural setting close to western Leyte routes. The presence of monkeys made the destination especially memorable for families and first-time visitors.",
    facts: [
      "The caves are best explored with local guidance for safety and orientation.",
      "Wildlife encounters should be observed from a respectful distance.",
      "The stop pairs well with Cuatro Islas or other western Leyte destinations."
    ],
    fee: "Local entrance and guide fees may apply.",
    hours: "Daylight visits are recommended.",
    activities: "Explore cave areas, walk with a guide, watch wildlife, and take photos.",
    bestTime: "Morning, when it is cooler and less crowded.",
    travelTips: "Do not feed wildlife and wear shoes with reliable grip."
  },
  {
    name: "Dagami Pasalubong Trail",
    city: "Dagami",
    category: "Food Destination",
    image: "A Floating Hut in Leyte.jpg",
    summary: "A food-focused stop for classic Leyte delicacies and locally made pasalubong.",
    history: "Dagami is strongly associated with Leyte's native sweets, especially binagol, moron, and sagmani. These foods reflect Waray home cooking, coconut use, root crops, sticky rice, and the pasalubong culture that turns local craft into travel memory.",
    facts: [
      "Binagol is traditionally packed in a coconut shell, which gives it both name and character.",
      "Moron is a chocolate-flavored rice roll popular across Leyte and Samar.",
      "Food stops are often best in the morning, when market stalls and pasalubong sellers are active."
    ],
    fee: "No entrance fee; budget for food purchases.",
    hours: "Markets and stalls are usually best visited in the morning to afternoon.",
    activities: "Taste local delicacies, shop for pasalubong, walk through town, and ask vendors about preparation.",
    bestTime: "Fiesta season or morning market hours.",
    travelTips: "Buy sealed items for longer travel and ask vendors about shelf life."
  },
  {
    name: "Red Beach",
    city: "Palo",
    category: "Beach",
    image: "Close to Leyte beach.jpg",
    summary: "A coastal landscape where beach scenery and World War II memory meet.",
    history: "Red Beach is historically important because it was part of the landing area used by Allied forces in October 1944. Today, its shoreline is often visited together with the MacArthur Landing Memorial.",
    facts: [
      "The beach name is tied to military landing zones rather than leisure branding.",
      "Its historical value makes it different from Leyte's island-hopping beaches.",
      "The site helps visitors understand why Leyte is central to Philippine World War II memory."
    ],
    fee: "Usually free for public beach areas.",
    hours: "Best visited during daylight.",
    activities: "Walk the shore, photograph the coast, visit nearby memorials, and reflect on wartime history.",
    bestTime: "Late afternoon for cooler weather.",
    travelTips: "Pair the visit with MacArthur Landing Memorial for historical context."
  },
  {
    name: "Alto Peak",
    city: "Ormoc and Jaro trail areas",
    category: "Mountain",
    image: "Bondari Hill.jpg",
    summary: "A serious highland hike for prepared travelers who want Leyte's mountain side.",
    history: "Alto Peak is part of the mountainous backbone that gives Leyte its rugged interior. While the province is often marketed through islands and memorials, hikes like Alto Peak reveal its forested, elevated terrain.",
    facts: [
      "The trail is better suited to prepared hikers than casual walkers.",
      "Mountain weather can change quickly, even when the coast is clear.",
      "Views depend heavily on cloud cover, so early starts improve the chance of open scenery."
    ],
    fee: "Guide and local registration fees may apply.",
    hours: "Start early and coordinate with local guides.",
    activities: "Hike, walk ridges, photograph highland views, and experience Leyte's cooler interior.",
    bestTime: "Dryer months and early starts.",
    travelTips: "Hire a guide, bring rain gear, and do not attempt the hike in severe weather."
  }
];

const params = new URLSearchParams(window.location.search);
const requestedSlug = params.get("destination") || "";
const currentDestination = destinationStories.find((destination) => slugify(destination.name) === requestedSlug) || destinationStories[0];

document.title = `${currentDestination.name} | Visit Leyte`;
document.querySelector("#detailHeroImage").src = commonsImage(currentDestination.image, 1600);
document.querySelector("#detailHeroImage").alt = currentDestination.name;
document.querySelector("#detailCategory").textContent = currentDestination.category;
document.querySelector("#detailTitle").textContent = currentDestination.name;
document.querySelector("#detailSummary").textContent = currentDestination.summary;
document.querySelector("#detailLocation").textContent = `${currentDestination.city}, Leyte`;
document.querySelector("#detailFee").textContent = currentDestination.fee;
document.querySelector("#detailHours").textContent = currentDestination.hours;
document.querySelector("#detailBestTime").textContent = currentDestination.bestTime;
document.querySelector("#historyTitle").textContent = `The story of ${currentDestination.name}`;
document.querySelector("#detailHistory").textContent = currentDestination.history;
document.querySelector("#detailActivities").textContent = currentDestination.activities;
document.querySelector("#detailTravelTips").textContent = currentDestination.travelTips;

document.querySelector("#factsList").innerHTML = currentDestination.facts
  .map((fact) => `<li>${fact}</li>`)
  .join("");

const relatedDestinations = destinationStories
  .filter((destination) => destination.name !== currentDestination.name)
  .slice(0, 3);

document.querySelector("#relatedDestinations").innerHTML = relatedDestinations
  .map((destination) => `
    <article class="destination-card related-card">
      <img src="${commonsImage(destination.image, 700)}" alt="${destination.name}">
      <div class="destination-card-body">
        <div class="destination-meta">
          <span class="pill">${destination.category}</span>
          <span class="pill">${destination.city}</span>
        </div>
        <h3>${destination.name}</h3>
        <p>${destination.summary}</p>
        <a class="text-link" href="destination.html?destination=${slugify(destination.name)}">Learn more</a>
      </div>
    </article>
  `)
  .join("");
