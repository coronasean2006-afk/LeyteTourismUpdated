const commonsImage = (file, width = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const destinations = [
  {
    name: "Kalanggaman Island",
    city: "Palompon",
    category: "Island",
    image: "Sunrise in Kalanggaman Island.jpg",
    page: "destination.html",
    shortDescription: "A postcard-famous island with long white sandbars and clear water.",
    fullDescription: "Kalanggaman Island is one of Leyte's most recognizable destinations, known for its slender sandbars, turquoise shallows, beach camps, and wide open sea views.",
    fee: "Fees vary by residency and package; coordinate with Palompon Tourism.",
    hours: "Day trips commonly run during daylight hours.",
    activities: "Swimming, snorkeling, sandbar walks, beach camping, kayaking, photography.",
    bestTime: "Dry months from March to May, or any calm-sea day.",
    travelTips: "Reserve with the local tourism office, bring reef-safe sun protection, and watch boat schedules."
  },
  {
    name: "Cuatro Islas",
    city: "Inopacan and Hindang",
    category: "Island",
    image: "Crystal clear blue waters.jpg",
    page: "cuatro-islas.html",
    shortDescription: "A four-island hop with white beaches, snorkeling water, and quiet coves.",
    fullDescription: "Cuatro Islas is a group of islands made up of Digyo, Mahaba, Apid, and Himokilan. It is ideal for island hopping, swimming, simple beach picnics, and slower coastal days.",
    fee: "Boat and environmental fees apply; rates depend on group size.",
    hours: "Best visited in daylight with registered boat operators.",
    activities: "Island hopping, swimming, snorkeling, beach picnics, coastal photography.",
    bestTime: "Calm seas, especially from March to early June.",
    travelTips: "Start early from the Inopacan port and pack dry bags for valuables."
  },
  {
    name: "Lake Danao Natural Park",
    city: "Ormoc City",
    category: "Mountain",
    image: "Lake Danao.jpg",
    page: "lake-danao-natural-park.html",
    shortDescription: "A cool upland lake surrounded by forested hills and picnic spots.",
    fullDescription: "Lake Danao is a mountain lake northeast of Ormoc. Visitors come for its cool air, floating cottages, kayaking, fishing, and calm scenery.",
    fee: "Local entrance and activity fees may apply.",
    hours: "Typically open during daytime park hours.",
    activities: "Kayaking, floating cottages, picnics, fishing, nature viewing.",
    bestTime: "Morning to early afternoon for clearer light and gentler weather.",
    travelTips: "Bring a jacket or rain layer; upland weather can change quickly."
  },
  {
    name: "MacArthur Landing Memorial",
    city: "Palo",
    category: "Historical Site",
    image: "MacArthur Landing Memorial National Park in Leyte.jpg",
    page: "macarthur-landing-memorial.html",
    shortDescription: "A landmark memorial honoring the 1944 return of Allied forces.",
    fullDescription: "The MacArthur Landing Memorial National Park marks General Douglas MacArthur's landing at Red Beach on October 20, 1944, a major moment in the liberation of the Philippines during World War II.",
    fee: "Usually free; museum or nearby facilities may have separate fees.",
    hours: "Open-air site, best visited during daylight.",
    activities: "Heritage viewing, photography, museum visit, quiet reflection.",
    bestTime: "Late afternoon for softer light over the memorial lagoon.",
    travelTips: "Treat the area as a memorial space and allow time for nearby Palo heritage stops."
  },
  {
    name: "San Juanico Bridge",
    city: "Tacloban City",
    category: "Historical Site",
    image: "San Juanico Bridge.2024.jpg",
    page: "san-juanico-bridge.html",
    shortDescription: "An iconic bridge linking Leyte and Samar across the San Juanico Strait.",
    fullDescription: "San Juanico Bridge is a celebrated engineering landmark and one of the most photographed sights around Tacloban. Its curves cross the San Juanico Strait with views of islets and blue water.",
    fee: "No entrance fee.",
    hours: "Accessible all day; viewpoints are best in daylight or early evening.",
    activities: "Sightseeing, photography, scenic drive, sunset viewing.",
    bestTime: "Sunrise, sunset, or blue hour for dramatic bridge views.",
    travelTips: "Use safe designated viewing areas and avoid stopping in unsafe road sections."
  },
  {
    name: "Palo Metropolitan Cathedral",
    city: "Palo",
    category: "Historical Site",
    image: "Palo Metropolitan Cathedral (Palo, Leyte; 09-09-2022).jpg",
    page: "palo-metropolitan-cathedral.html",
    shortDescription: "A historic cathedral and faith landmark in the heart of Palo.",
    fullDescription: "The Palo Metropolitan Cathedral, formally the Metropolitan Cathedral of Our Lord's Transfiguration, is a major religious and historical landmark tied to Leyte's evangelization, World War II memory, and post-Yolanda resilience.",
    fee: "Free; donations are optional.",
    hours: "Open for prayer and Mass; check parish schedules for services.",
    activities: "Church visit, heritage photography, quiet reflection, architecture viewing.",
    bestTime: "Morning or late afternoon, outside scheduled Mass if you want a quieter visit.",
    travelTips: "Dress respectfully, keep voices low inside the cathedral, and pair the stop with MacArthur Landing Memorial."
  },
  {
    name: "Canigao Island",
    city: "Matalom",
    category: "Beach",
    image: "Canigao Island located at Matalom, Leyte.jpg",
    page: "canigao-island.html",
    shortDescription: "A small island escape with white sand and bright swimming water.",
    fullDescription: "Canigao Island sits off Matalom and is loved for quick beach trips, swimming, snorkeling, and simple island cottages.",
    fee: "Entrance, boat, and cottage fees may apply.",
    hours: "Day trips depend on boat schedules and sea conditions.",
    activities: "Swimming, snorkeling, beach walks, picnics.",
    bestTime: "Weekday mornings during calm weather.",
    travelTips: "Confirm return boat times before leaving the mainland."
  },
  {
    name: "Mahagnao Volcano Natural Park",
    city: "Burauen",
    category: "Adventure",
    image: "Bondari Peak.jpg",
    page: "mahagnao-volcano-natural-park.html",
    shortDescription: "A protected highland park with crater lakes, forest, springs, and trails.",
    fullDescription: "Mahagnao Volcano Natural Park is an ecotourism area around an inactive volcano. It features lakes, forest, springs, mud features, camping areas, and guided trail experiences.",
    fee: "Local park, guide, and activity fees may apply.",
    hours: "Coordinate visits during daytime with Burauen tourism staff.",
    activities: "Hiking, camping, crater lake viewing, birding, nature photography.",
    bestTime: "Dryer weeks and clear mornings are best for trail comfort.",
    travelTips: "Use guides, wear trail shoes, and check road conditions before going."
  },
  {
    name: "Masaba Falls",
    city: "Matag-ob",
    category: "Waterfall",
    image: "The Lush Tagbo Falls.jpg",
    page: "masaba-falls.html",
    shortDescription: "A refreshing inland waterfall reached through a rural nature route.",
    fullDescription: "Masaba Falls offers a quieter waterfall experience in western Leyte, with cool water and a greener inland setting for travelers who want a break from the beach.",
    fee: "Local guide or entrance fees may apply.",
    hours: "Best visited in daylight.",
    activities: "Short hiking, waterfall viewing, swimming when conditions are safe.",
    bestTime: "After light rains for stronger flow, avoiding stormy weather.",
    travelTips: "Ask locals about current trail conditions and never swim near strong falls after heavy rain."
  },
  {
    name: "Hindang Caves and Wild Monkeys",
    city: "Hindang",
    category: "Adventure",
    image: "View on the North Side.jpg",
    page: "hindang-caves-and-wild-monkeys.html",
    shortDescription: "A cave-and-nature stop known for limestone formations and resident monkeys.",
    fullDescription: "Hindang's cave area combines a short adventure route with limestone scenery and wildlife encounters, making it a good side trip from western Leyte island routes.",
    fee: "Local entrance and guide fees may apply.",
    hours: "Daylight visits are recommended.",
    activities: "Cave viewing, guided walk, wildlife watching, photography.",
    bestTime: "Morning, when it is cooler and less crowded.",
    travelTips: "Do not feed wildlife and wear shoes with grip."
  },
  {
    name: "Dagami Pasalubong Trail",
    city: "Dagami",
    category: "Food Destination",
    image: "A Floating Hut in Leyte.jpg",
    page: "dagami-pasalubong-trail.html",
    shortDescription: "A sweet stop for Leyte delicacies like binagol, moron, and sagmani.",
    fullDescription: "Dagami is strongly associated with Leyte's native delicacies. Food travelers can look for binagol, moron, sagmani, and other pasalubong made by local producers.",
    fee: "No entrance fee; budget for food purchases.",
    hours: "Markets and stalls are usually best visited in the morning to afternoon.",
    activities: "Food tasting, pasalubong shopping, town walking, local product discovery.",
    bestTime: "Fiesta season or morning market hours.",
    travelTips: "Buy sealed items for longer travel and ask vendors about shelf life."
  },
  {
    name: "Red Beach",
    city: "Palo",
    category: "Beach",
    image: "Close to Leyte beach.jpg",
    page: "red-beach.html",
    shortDescription: "A historic shoreline tied to the Leyte Gulf landings.",
    fullDescription: "Red Beach is both a coastal place and a historical landscape connected to the 1944 Leyte landings, located near the MacArthur memorial area.",
    fee: "Usually free for public beach areas.",
    hours: "Best visited during daylight.",
    activities: "Walking, photography, historical sightseeing, coastal viewing.",
    bestTime: "Late afternoon for cooler weather.",
    travelTips: "Pair the visit with MacArthur Landing Memorial for historical context."
  },
  {
    name: "Alto Peak",
    city: "Ormoc and Jaro trail areas",
    category: "Mountain",
    image: "Bondari Hill.jpg",
    page: "alto-peak.html",
    shortDescription: "A challenging highland hike for experienced outdoor travelers.",
    fullDescription: "Alto Peak, often associated with Leyte's mountain spine, rewards prepared hikers with cool highland terrain and wide views when the weather cooperates.",
    fee: "Guide and local registration fees may apply.",
    hours: "Start early and coordinate with local guides.",
    activities: "Hiking, ridge walking, nature photography, endurance trekking.",
    bestTime: "Dryer months and early starts.",
    travelTips: "Hire a guide, bring rain gear, and do not attempt the hike in severe weather."
  }
];

const galleryImages = [
  ["Sunrise in Kalanggaman Island.jpg", "Sunrise in Kalanggaman Island"],
  ["Kalanggaman Island 2024.jpg", "Kalanggaman Island"],
  ["Canigao Island located at Matalom, Leyte.jpg", "Canigao Island, Matalom"],
  ["Canigao Red.jpg", "Canigao Island shore"],
  ["Taken from the East side of Canigao.jpg", "Canigao from the east side"],
  ["Baybay beach.jpg", "Baybay beach"],
  ["Calubian Leyte Philippines Sunset.jpg", "Calubian sunset"],
  ["Calubian Leyte Philippines Waterfront.jpg", "Calubian waterfront"],
  ["Crystal clear blue waters.jpg", "Clear Leyte waters"],
  ["Mayorga beach - panoramio.jpg", "Mayorga beach"],
  ["Mayorga beach left - panoramio.jpg", "Mayorga shoreline"],
  ["View on the North Side.jpg", "Leyte island view"],
  ["Lake Danao.jpg", "Lake Danao"],
  ["Lake Danao Leyte.jpg", "Lake Danao, Leyte"],
  ["Calm Reflection.jpg", "Calm reflection at Lake Danao"],
  ["Always take the scenic route.jpg", "Scenic route near Lake Danao"],
  ["Dawn and the Early Blue Hues.jpg", "Dawn over Lake Danao"],
  ["Shedding the Light amidst the Darkness of Lake Danao.jpg", "Lake Danao light"],
  ["Bondari Hill.jpg", "Bondari Hill"],
  ["Bondari Peak.jpg", "Bondari Peak"],
  ["A Floating Hut in Leyte.jpg", "Floating hut in Leyte"],
  ["The Lush Tagbo Falls.jpg", "Nature in Leyte"],
  ["Young Fishermen in Leyte.jpg", "Young fishermen in Leyte"],
  ["Sea Shell in Leyte.jpg", "Sea shell in Leyte"],
  ["Tabok.jpg", "Tabok coastal scene"],
  ["San Juanico Bridge.2024.jpg", "San Juanico Bridge"],
  ["San Juanico Bridge sunset lighted (Tacloban, Leyte; 09-08-2022).jpg", "San Juanico Bridge at sunset"],
  ["MacArthur Landing Memorial National Park in Leyte.jpg", "MacArthur Landing Memorial"],
  ["Gen. Douglas MacArthur Landing Monument 02.JPG", "MacArthur Landing Monument"],
  ["Statues at Leyte Landing site.JPG", "Leyte Landing statues"]
];

const categories = ["All", ...new Set(destinations.map((destination) => destination.category))];
const destinationGrid = document.querySelector("#destinationGrid");
const destinationSearch = document.querySelector("#destinationSearch");
const categoryFilter = document.querySelector("#categoryFilter");
const selectedDestination = document.querySelector("#selectedDestination");
const emptyState = document.querySelector("#emptyState");

const renderCategoryOptions = () => {
  categoryFilter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  categoryFilter.value = "All";
  selectedDestination.innerHTML += destinations
    .map((destination) => `<option value="${destination.name}">${destination.name}</option>`)
    .join("");
};

const destinationMatches = (destination, query, category) => {
  const text = `${destination.name} ${destination.city} ${destination.category}`.toLowerCase();
  const matchesQuery = text.includes(query.toLowerCase().trim());
  const matchesCategory = category === "All" || destination.category === category;
  return matchesQuery && matchesCategory;
};

const renderDestinations = () => {
  const query = destinationSearch.value;
  const category = categoryFilter.value;
  const filteredDestinations = destinations.filter((destination) => destinationMatches(destination, query, category));

  destinationGrid.innerHTML = filteredDestinations
    .map((destination, index) => `
      <article class="destination-card card h-100">
        <img class="card-img-top" src="${commonsImage(destination.image, 900)}" alt="${destination.name}">
        <div class="destination-card-body card-body">
          <div class="destination-meta">
            <span class="pill">${destination.category}</span>
            <span class="pill">${destination.city}</span>
          </div>
          <h3>${destination.name}</h3>
          <p>${destination.shortDescription}</p>
          <div class="destination-facts">
            <span>Entrance: ${destination.fee}</span>
            <span>Hours: ${destination.hours}</span>
          </div>
          <div class="card-actions">
            <button class="secondary-button btn btn-outline-success" type="button" data-destination-index="${destinations.indexOf(destination)}">View Details</button>
            <a class="text-link" href="${destination.page}">Learn More</a>
          </div>
        </div>
      </article>
    `)
    .join("");

  emptyState.hidden = filteredDestinations.length > 0;
};

const modal = document.querySelector("#destinationModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalLocation = document.querySelector("#modalLocation");
const modalDescription = document.querySelector("#modalDescription");
const modalActivities = document.querySelector("#modalActivities");
const modalBestTime = document.querySelector("#modalBestTime");
const modalFee = document.querySelector("#modalFee");
const modalHours = document.querySelector("#modalHours");
const modalTips = document.querySelector("#modalTips");

const openDestinationModal = (destination) => {
  modalImage.src = commonsImage(destination.image, 1100);
  modalImage.alt = destination.name;
  modalCategory.textContent = destination.category;
  modalTitle.textContent = destination.name;
  modalLocation.textContent = `${destination.city}, Leyte`;
  modalDescription.textContent = destination.fullDescription;
  modalActivities.textContent = destination.activities;
  modalBestTime.textContent = destination.bestTime;
  modalFee.textContent = destination.fee;
  modalHours.textContent = destination.hours;
  modalTips.textContent = destination.travelTips;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeDestinationModal = () => {
  modal.hidden = true;
  document.body.style.overflow = "";
};

destinationGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-destination-index]");
  if (!button) return;
  openDestinationModal(destinations[Number(button.dataset.destinationIndex)]);
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeDestinationModal();
  }
});

destinationSearch.addEventListener("input", renderDestinations);
categoryFilter.addEventListener("change", renderDestinations);

const galleryGrid = document.querySelector("#galleryGrid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const prevImage = document.querySelector("#prevImage");
const nextImage = document.querySelector("#nextImage");
let activeGalleryIndex = 0;

const renderGallery = () => {
  galleryGrid.innerHTML = galleryImages
    .map(([file, caption], index) => `
      <button class="gallery-tile" type="button" data-gallery-index="${index}">
        <img src="${commonsImage(file, 650)}" alt="${caption}">
        <span>${caption}</span>
      </button>
    `)
    .join("");
};

const updateLightbox = () => {
  const [file, caption] = galleryImages[activeGalleryIndex];
  lightboxImage.src = commonsImage(file, 1300);
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
};

const openLightbox = (index) => {
  activeGalleryIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightbox.hidden = true;
  document.body.style.overflow = "";
};

const moveLightbox = (direction) => {
  activeGalleryIndex = (activeGalleryIndex + direction + galleryImages.length) % galleryImages.length;
  updateLightbox();
};

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-index]");
  if (!button) return;
  openLightbox(Number(button.dataset.galleryIndex));
});

document.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);
prevImage.addEventListener("click", () => moveLightbox(-1));
nextImage.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDestinationModal();
    closeLightbox();
  }

  if (!lightbox.hidden && event.key === "ArrowLeft") {
    moveLightbox(-1);
  }

  if (!lightbox.hidden && event.key === "ArrowRight") {
    moveLightbox(1);
  }
});

const form = document.querySelector("#inquiryForm");
const formSuccess = document.querySelector("#formSuccess");

const validators = {
  fullName: (value) => value.trim() ? "" : "Full name is required.",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter a valid email address.",
  contact: (value) => /^\d+$/.test(value.trim()) ? "" : "Contact number must contain numbers only.",
  selectedDestination: (value) => value ? "" : "Please select a destination.",
  travelDate: (value) => value ? "" : "Travel date is required.",
  visitors: (value) => Number(value) >= 1 ? "" : "Number of visitors must be at least 1.",
  message: (value) => value.trim() ? "" : "Message is required."
};

const setFieldError = (field, message) => {
  const label = field.closest("label");
  const error = label.querySelector(".error-message");
  label.classList.toggle("field-error", Boolean(message));
  error.textContent = message;
};

const validateForm = () => {
  let isValid = true;

  Object.entries(validators).forEach(([fieldName, validator]) => {
    const field = form.elements[fieldName];
    const error = validator(field.value);
    setFieldError(field, error);
    if (error) isValid = false;
  });

  return isValid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSuccess.hidden = true;

  if (!validateForm()) {
    return;
  }

  formSuccess.hidden = false;
  form.reset();
  form.elements.visitors.value = 1;
});

form.addEventListener("input", (event) => {
  if (!event.target.name || !validators[event.target.name]) return;
  setFieldError(event.target, validators[event.target.name](event.target.value));
});

renderCategoryOptions();
renderDestinations();
renderGallery();
