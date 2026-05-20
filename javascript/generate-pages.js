const fs = require("fs");

const commonsImage = (file, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const pages = [
  {
    file: "destination.html",
    title: "Kalanggaman Island",
    type: "Destination",
    category: "Island",
    location: "Palompon, Leyte",
    anchor: "destinations",
    image: "Sunrise in Kalanggaman Island.jpg",
    summary: "A white-sand island escape known for its long sandbars, bright shallows, and open-sea calm.",
    knownFor: "Twin sandbars and clear swimming water",
    visitNote: "Reserve with Palompon Tourism before traveling.",
    history: "Kalanggaman Island grew from a quiet local island into one of Leyte's strongest tourism symbols because of its striking sandbars and blue water. Its name is often connected to a local word for bird, a reference to the island's wing-like shape when viewed from above.",
    facts: [
      "The island is uninhabited, so most visits are day trips or regulated overnight camping.",
      "Its sandbars shift subtly with tide, season, and weather.",
      "Local tourism management helps protect the island from overcrowding."
    ],
    activities: "Swim, snorkel, walk the sandbar, kayak, camp with permission, and photograph sunrise or sunset."
  },
  {
    file: "cuatro-islas.html",
    title: "Cuatro Islas",
    type: "Destination",
    category: "Island",
    location: "Inopacan and Hindang, Leyte",
    anchor: "destinations",
    image: "Crystal clear blue waters.jpg",
    summary: "A four-island route for beach hopping, snorkeling water, and relaxed coastal scenery.",
    knownFor: "Digyo, Mahaba, Apid, and Himokilan islands",
    visitNote: "Start early and coordinate with registered boat operators.",
    history: "Cuatro Islas means Four Islands in Spanish. The island group is made up of Digyo, Mahaba, Apid, and Himokilan, with local tourism offices and coastal communities helping shape it into a managed island-hopping destination.",
    facts: [
      "Digyo is often the most visited island because of its compact beach scenery.",
      "Himokilan is associated with Hindang, while the other islands are commonly linked with Inopacan.",
      "The islands give western Leyte itineraries a gentler rural coastal feel."
    ],
    activities: "Go island hopping, swim, snorkel, picnic on the beach, and take coastal photos."
  },
  {
    file: "lake-danao-natural-park.html",
    title: "Lake Danao Natural Park",
    type: "Destination",
    category: "Mountain",
    location: "Ormoc City, Leyte",
    anchor: "destinations",
    image: "Lake Danao.jpg",
    summary: "A cool upland lake where visitors slow down with forest air, floating cottages, and quiet water.",
    knownFor: "Volcanic lake scenery and floating cottages",
    visitNote: "Bring a jacket or rain layer for upland weather.",
    history: "Lake Danao is a volcanic lake in Ormoc's highlands and forms the heart of a protected natural park. Its cool elevation made it a favorite local escape from the warmer coast and a center for nature-based recreation.",
    facts: [
      "The lake is often described as guitar-shaped because of its outline.",
      "Its upland setting is cooler than central Ormoc.",
      "The park supports kayaking, picnics, and floating cottage activities."
    ],
    activities: "Kayak, ride a floating cottage, picnic, fish where allowed, and enjoy the surrounding forest."
  },
  {
    file: "macarthur-landing-memorial.html",
    title: "MacArthur Landing Memorial",
    type: "Destination",
    category: "Historical Site",
    location: "Palo, Leyte",
    anchor: "destinations",
    image: "MacArthur Landing Memorial National Park in Leyte.jpg",
    summary: "A major World War II memorial marking the Allied return to the Philippines in 1944.",
    knownFor: "The Leyte Gulf landings of October 20, 1944",
    visitNote: "Treat the site as both a landmark and a memorial space.",
    history: "The memorial commemorates General Douglas MacArthur's landing at Red Beach on October 20, 1944, during the campaign to liberate the Philippines from Japanese occupation. The bronze figures and open lagoon make the event visible in public memory.",
    facts: [
      "The landing is tied to MacArthur's famous promise to return to the Philippines.",
      "The Leyte Gulf campaign was one of the defining World War II events in the Pacific.",
      "The site is frequently visited by students, veterans' families, and history travelers."
    ],
    activities: "View the monument, take photos, visit nearby heritage stops, and reflect on Leyte's wartime history."
  },
  {
    file: "san-juanico-bridge.html",
    title: "San Juanico Bridge",
    type: "Destination",
    category: "Historical Site",
    location: "Tacloban City, Leyte",
    anchor: "destinations",
    image: "San Juanico Bridge.2024.jpg",
    summary: "Leyte's iconic bridge crossing the San Juanico Strait toward Samar.",
    knownFor: "Sweeping bridge views between Leyte and Samar",
    visitNote: "Use safe viewing areas and avoid stopping in unsafe road sections.",
    history: "Completed in 1973, San Juanico Bridge became a landmark of Eastern Visayas and a visible connection between Leyte and Samar. Its long curved profile over the strait made it one of the most photographed structures in the region.",
    facts: [
      "The bridge stretches over two kilometers across the San Juanico Strait.",
      "It forms part of the Pan-Philippine Highway.",
      "Its curve and water views make sunrise, sunset, and blue hour especially popular."
    ],
    activities: "Take a scenic drive, photograph the bridge, watch sunset, and view the strait and nearby islets."
  },
  {
    file: "palo-metropolitan-cathedral.html",
    title: "Palo Metropolitan Cathedral",
    type: "Destination",
    category: "Historical Site",
    location: "Palo, Leyte",
    anchor: "destinations",
    image: "Palo Metropolitan Cathedral (Palo, Leyte; 09-09-2022).jpg",
    summary: "A historic cathedral and faith landmark in the heart of Palo.",
    knownFor: "Our Lord's Transfiguration, wartime history, and resilience after Yolanda",
    visitNote: "Dress respectfully and check parish schedules before visiting.",
    history: "The Palo Metropolitan Cathedral, formally the Metropolitan Cathedral of Our Lord's Transfiguration, traces its roots to the early mission history of Palo. It became a cathedral in 1938, served as a hospital during World War II, and later became a symbol of faith and recovery after Typhoon Yolanda damaged the area in 2013.",
    facts: [
      "The National Historical Commission marker notes Palo's mission history beginning in 1596.",
      "The cathedral became the mother church of the Archdiocese of Palo.",
      "Pope Francis visited Palo during his 2015 trip to typhoon-affected communities."
    ],
    activities: "Visit for prayer, view the facade and interior, photograph heritage details respectfully, and pair the stop with nearby Palo historical sites."
  },
  {
    file: "canigao-island.html",
    title: "Canigao Island",
    type: "Destination",
    category: "Beach",
    location: "Matalom, Leyte",
    anchor: "destinations",
    image: "Canigao Island located at Matalom, Leyte.jpg",
    summary: "A quick island getaway off Matalom with white sand, swimming water, and easy beach energy.",
    knownFor: "Short boat trip and simple white-sand island scenery",
    visitNote: "Confirm boat schedules before leaving the mainland.",
    history: "Canigao Island has long been a favorite local beach escape for residents of southern Leyte island towns. Its accessibility from Matalom helped it become a popular day-trip destination.",
    facts: [
      "The island is small enough for a relaxed shoreline walk.",
      "Day trips are common, though local rules may allow simple overnight stays.",
      "Its water is best enjoyed during calm sea conditions."
    ],
    activities: "Swim, snorkel, walk the shore, picnic, and rent simple cottages when available."
  },
  {
    file: "mahagnao-volcano-natural-park.html",
    title: "Mahagnao Volcano Natural Park",
    type: "Destination",
    category: "Adventure",
    location: "Burauen, Leyte",
    anchor: "destinations",
    image: "Bondari Peak.jpg",
    summary: "A highland ecotourism area with crater lakes, forest trails, springs, and volcanic landscapes.",
    knownFor: "Crater lakes, springs, forest trails, and camping",
    visitNote: "Use local guides and check road conditions.",
    history: "Mahagnao Volcano Natural Park protects an inactive volcanic landscape around Burauen and nearby municipalities. Its lakes, springs, forest, and thermal features make it one of Leyte's richest inland nature destinations.",
    facts: [
      "The park is associated with crater lakes in the Mahagnao volcanic system.",
      "Burauen is often called the Spring Capital of Leyte.",
      "It gives visitors a highland alternative to Leyte's beaches and memorials."
    ],
    activities: "Hike, camp, visit lakes and springs, watch birds, and photograph forest scenery."
  },
  {
    file: "masaba-falls.html",
    title: "Masaba Falls",
    type: "Destination",
    category: "Waterfall",
    location: "Matag-ob, Leyte",
    anchor: "destinations",
    image: "The Lush Tagbo Falls.jpg",
    summary: "A quieter waterfall stop for travelers looking for cool water and rural inland scenery.",
    knownFor: "Refreshing waterfall scenery in western Leyte",
    visitNote: "Avoid waterfall swimming after heavy rain.",
    history: "Masaba Falls is part of Matag-ob's inland nature appeal. Like many local waterfalls in Leyte, it is shaped by community access, seasonal water flow, and travelers who prefer less crowded natural stops.",
    facts: [
      "Waterfall flow can change depending on recent rain.",
      "Local advice is important because trails and swimming conditions can be seasonal.",
      "The stop adds inland variety to western Leyte island itineraries."
    ],
    activities: "Take a short hike, view the falls, swim only when safe, and enjoy the shaded setting."
  },
  {
    file: "hindang-caves-and-wild-monkeys.html",
    title: "Hindang Caves and Wild Monkeys",
    type: "Destination",
    category: "Adventure",
    location: "Hindang, Leyte",
    anchor: "destinations",
    image: "View on the North Side.jpg",
    summary: "A cave-and-nature side trip with limestone scenery and wildlife encounters.",
    knownFor: "Caves, limestone features, and monkey sightings",
    visitNote: "Do not feed wildlife and wear shoes with grip.",
    history: "Hindang's cave area became a local adventure stop because it combines accessible limestone features with a natural setting close to western Leyte routes. Wildlife encounters make the stop especially memorable for families and first-time visitors.",
    facts: [
      "The caves are best explored with local guidance.",
      "Wildlife should be observed from a respectful distance.",
      "The stop pairs well with Cuatro Islas or western Leyte routes."
    ],
    activities: "Explore cave areas, walk with a guide, watch wildlife, and take photos."
  },
  {
    file: "dagami-pasalubong-trail.html",
    title: "Dagami Pasalubong Trail",
    type: "Destination",
    category: "Food Destination",
    location: "Dagami, Leyte",
    anchor: "destinations",
    image: "A Floating Hut in Leyte.jpg",
    summary: "A food-focused stop for classic Leyte delicacies and locally made pasalubong.",
    knownFor: "Binagol, moron, sagmani, and native sweets",
    visitNote: "Ask vendors about shelf life before long travel.",
    history: "Dagami is strongly associated with Leyte's native sweets. These foods reflect Waray home cooking, coconut use, root crops, sticky rice, and the pasalubong culture that turns local craft into travel memory.",
    facts: [
      "Binagol is traditionally packed in a coconut shell.",
      "Moron is a chocolate-flavored sticky rice roll popular across Leyte and Samar.",
      "Food stops are often best in the morning when stalls are active."
    ],
    activities: "Taste local delicacies, shop for pasalubong, walk through town, and ask vendors about preparation."
  },
  {
    file: "red-beach.html",
    title: "Red Beach",
    type: "Destination",
    category: "Beach",
    location: "Palo, Leyte",
    anchor: "destinations",
    image: "Close to Leyte beach.jpg",
    summary: "A coastal landscape where beach scenery and World War II memory meet.",
    knownFor: "Leyte landing history and Palo shoreline views",
    visitNote: "Pair the visit with MacArthur Landing Memorial.",
    history: "Red Beach is historically important because it was part of the landing area used by Allied forces in October 1944. Today, its shoreline is often visited together with the MacArthur Landing Memorial.",
    facts: [
      "The beach name is tied to military landing zones.",
      "Its historical value makes it different from Leyte's island-hopping beaches.",
      "It helps visitors understand why Leyte is central to Philippine World War II memory."
    ],
    activities: "Walk the shore, photograph the coast, visit nearby memorials, and reflect on wartime history."
  },
  {
    file: "alto-peak.html",
    title: "Alto Peak",
    type: "Destination",
    category: "Mountain",
    location: "Ormoc and Jaro trail areas, Leyte",
    anchor: "destinations",
    image: "Bondari Hill.jpg",
    summary: "A serious highland hike for prepared travelers who want Leyte's mountain side.",
    knownFor: "Highland trekking and wide mountain views",
    visitNote: "Hire a guide and avoid hiking in severe weather.",
    history: "Alto Peak is part of the mountainous backbone that gives Leyte its rugged interior. While Leyte is often marketed through islands and memorials, hikes like Alto Peak reveal the province's forested and elevated terrain.",
    facts: [
      "The trail is better suited to prepared hikers than casual walkers.",
      "Mountain weather can change quickly even when the coast is clear.",
      "Views depend on cloud cover, so early starts help."
    ],
    activities: "Hike, walk ridges, photograph highland views, and experience Leyte's cooler interior."
  },
  {
    file: "pintados-kasadyaan-festival.html",
    title: "Pintados-Kasadyaan Festival",
    type: "Festival",
    category: "Culture",
    location: "Tacloban City and Leyte Province",
    anchor: "festivals",
    image: "Buyogan Festival in the Pintados Kasadyaan Festival 2016.jpg",
    summary: "A vibrant June celebration of faith, folklore, street dance, and Leyte identity.",
    knownFor: "Body-paint inspired costumes and town delegations",
    visitNote: "Check the annual schedule because parade dates can vary.",
    history: "Pintados-Kasadyaan combines two powerful cultural ideas: the tattooed Pintados warriors described in early Visayan history and kasadyaan, or merriment. The festival gathers delegations from Leyte towns to perform stories of faith, folklore, harvest, and community pride.",
    facts: [
      "The festival is usually celebrated in June.",
      "Performances often use body-paint motifs inspired by precolonial Visayan tattoo traditions.",
      "The event highlights both provincial culture and Catholic devotion."
    ],
    activities: "Watch street dancing, photograph costumes respectfully, attend cultural programs, and sample festival food."
  },
  {
    file: "sangyaw-festival.html",
    title: "Sangyaw Festival",
    type: "Festival",
    category: "Culture",
    location: "Tacloban City, Leyte",
    anchor: "festivals",
    image: "Sangyaw 2023 a.jpg",
    summary: "Tacloban's June celebration of devotion, music, street dancing, and city pride.",
    knownFor: "Santo Nino devotion, street dance, floats, and color",
    visitNote: "Arrive early for parade routes and expect crowds.",
    history: "Sangyaw means to proclaim or announce. Tacloban's festival honors the Santo Nino through dance, music, floats, and public celebration, turning the city streets into a stage for devotion and civic identity.",
    facts: [
      "Sangyaw is associated with Tacloban's June fiesta season.",
      "The festival name reflects public proclamation and joyful announcement.",
      "It is one of the most visible cultural events in Tacloban."
    ],
    activities: "Watch parades, follow cultural shows, photograph floats, and explore downtown Tacloban during fiesta season."
  },
  {
    file: "dinagamihan-festival.html",
    title: "Dinagamihan Festival",
    type: "Festival",
    category: "Culture",
    location: "Dagami, Leyte",
    anchor: "festivals",
    image: "Dagami Town Hall.jpg",
    summary: "A town celebration that honors Dagami identity, local pride, and native delicacies.",
    knownFor: "Dagami culture and pasalubong traditions",
    visitNote: "Visit local stalls for delicacies during the fiesta period.",
    history: "Dinagamihan Festival celebrates Dagami's community identity and local products. It is closely tied to the town's pride in native foods such as binagol, moron, and sagmani, which are part of Leyte's pasalubong culture.",
    facts: [
      "Dagami is strongly associated with Leyte native delicacies.",
      "Town festivals often combine faith, street activity, food, and community gatherings.",
      "The event gives visitors a reason to explore beyond Leyte's larger cities."
    ],
    activities: "Watch local performances, visit food stalls, buy pasalubong, and explore Dagami town life."
  },
  {
    file: "binagol.html",
    title: "Binagol",
    type: "Food",
    category: "Delicacy",
    location: "Dagami and Tacloban pasalubong shops",
    anchor: "food",
    image: "Binagol.jpg",
    summary: "A rich taro and coconut dessert packed inside a coconut shell.",
    knownFor: "Sweet coconut shell packaging and creamy root-crop filling",
    visitNote: "Buy sealed pieces if carrying them on a long trip.",
    history: "Binagol is one of Leyte's signature native sweets. It is commonly made with grated taro or root crop, coconut milk, sugar, and sometimes nuts, then packed in a coconut shell and wrapped for steaming.",
    facts: [
      "Its name is linked to bagol, a local word associated with coconut shell.",
      "The coconut shell is both container and identity marker.",
      "Dagami is one of the places strongly associated with the delicacy."
    ],
    activities: "Try it as dessert, buy it as pasalubong, compare versions from different vendors, and pair it with coffee."
  },
  {
    file: "moron.html",
    title: "Moron",
    type: "Food",
    category: "Delicacy",
    location: "Tacloban, Palo, Dagami, and pasalubong centers",
    anchor: "food",
    image: "Chocolate Moron.jpg",
    summary: "A chocolate-flavored sticky rice roll wrapped in banana leaves.",
    knownFor: "Soft glutinous rice texture and chocolate-coconut flavor",
    visitNote: "Ask vendors whether it should be eaten immediately or chilled.",
    history: "Moron is a beloved Leyte and Samar delicacy made from glutinous rice, coconut milk, sugar, and chocolate or cacao flavoring. Its spiral or layered appearance makes it easy to recognize in pasalubong stalls.",
    facts: [
      "It is often sold wrapped in banana leaves.",
      "The texture is soft, sticky, and mildly sweet.",
      "It is a practical travel snack because pieces are individually wrapped."
    ],
    activities: "Taste it warm or at room temperature, buy bundles for pasalubong, and compare chocolate intensity among vendors."
  },
  {
    file: "sagmani.html",
    title: "Sagmani",
    type: "Food",
    category: "Delicacy",
    location: "Dagami markets and town fiestas",
    anchor: "food",
    image: "Suman Latik.jpg",
    summary: "A soft native suman-style delicacy enriched with coconut and root crops.",
    knownFor: "Coconut-rich kakanin texture and fiesta food tradition",
    visitNote: "Look for it in markets, fiestas, and local pasalubong stalls.",
    history: "Sagmani belongs to Leyte's family of native rice and root-crop sweets. It reflects the province's everyday use of coconut, cassava, gabi, sweet potato, and sticky rice in community cooking.",
    facts: [
      "Recipes vary by household and town.",
      "It is often associated with fiestas and local gatherings.",
      "Its flavor is simple, sweet, and coconut-forward."
    ],
    activities: "Try it with coffee, buy small servings at markets, and ask vendors about the ingredients used."
  },
  {
    file: "roscas.html",
    title: "Roscas",
    type: "Food",
    category: "Delicacy",
    location: "Tacloban and Ormoc pasalubong shops",
    anchor: "food",
    image: "Roscas (Leyte cuisine).jpg",
    summary: "Crunchy ring-shaped cookies often carried home as Leyte pasalubong.",
    knownFor: "Crisp ring shape and travel-friendly packaging",
    visitNote: "Pack them carefully so the rings do not break in transit.",
    history: "Roscas are ring-shaped cookies found in Leyte pasalubong shops. Their shape, crunch, and shelf life make them easy to carry home, and they sit comfortably beside sweeter sticky delicacies like moron and binagol.",
    facts: [
      "Roscas are usually dry, crisp, and lightly sweet.",
      "Their ring shape makes them visually distinct from other native snacks.",
      "They are convenient for travelers because they keep better than many soft delicacies."
    ],
    activities: "Buy them for snacks, pair them with coffee, and include them in a mixed Leyte pasalubong box."
  }
];

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const pageTemplate = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(page.title)} | Visit Leyte</title>
  <link rel="preconnect" href="https://commons.wikimedia.org">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header navbar navbar-expand-lg">
    <a class="brand navbar-brand" href="index.html" aria-label="Visit Leyte home">
      <span class="brand-mark">L</span>
      <span>Visit Leyte</span>
    </a>
    <button class="navbar-toggler menu-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#detailNavigation" aria-controls="detailNavigation" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nav id="detailNavigation" class="collapse navbar-collapse site-nav-collapse" aria-label="Detail navigation">
      <div class="nav-links navbar-nav ms-lg-auto">
        <a class="nav-link" href="index.html#destinations">Destinations</a>
        <a class="nav-link" href="index.html#festivals">Festivals</a>
        <a class="nav-link" href="index.html#food">Food</a>
        <a class="nav-link" href="index.html#inquiry">Inquiry</a>
      </div>
    </nav>
  </header>

  <main class="destination-page">
    <section class="detail-hero" aria-labelledby="detailTitle">
      <img src="${commonsImage(page.image)}" alt="${escapeHtml(page.title)}">
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <a class="back-link" href="index.html#${escapeHtml(page.anchor)}">Back to ${escapeHtml(page.anchor)}</a>
        <p class="eyebrow">${escapeHtml(page.type)} | ${escapeHtml(page.category)}</p>
        <h1 id="detailTitle">${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.summary)}</p>
      </div>
    </section>

    <section class="section detail-overview">
      <aside class="quick-facts" aria-label="Quick facts">
        <h2>Quick Facts</h2>
        <dl>
          <div>
            <dt>Location</dt>
            <dd>${escapeHtml(page.location)}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>${escapeHtml(page.type)} - ${escapeHtml(page.category)}</dd>
          </div>
          <div>
            <dt>Best Known For</dt>
            <dd>${escapeHtml(page.knownFor)}</dd>
          </div>
          <div>
            <dt>Visit Note</dt>
            <dd>${escapeHtml(page.visitNote)}</dd>
          </div>
        </dl>
      </aside>

      <article class="detail-story">
        <p class="eyebrow">History and Character</p>
        <h2>The story of ${escapeHtml(page.title)}</h2>
        <p>${escapeHtml(page.history)}</p>

        <p class="eyebrow detail-kicker">Interesting Facts</p>
        <ul class="facts-list">
          ${page.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("\n          ")}
        </ul>

        <p class="eyebrow detail-kicker">What to Do</p>
        <p>${escapeHtml(page.activities)}</p>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>Visit Leyte tourism website sample. This page gives extra history and facts for ${escapeHtml(page.title)}.</p>
    <div>
      <a href="index.html">Home</a>
      <a href="index.html#${escapeHtml(page.anchor)}">Back to section</a>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>
`;

pages.forEach((page) => {
  fs.writeFileSync(page.file, pageTemplate(page), "utf8");
});

console.log(`Generated ${pages.length} HTML pages.`);
