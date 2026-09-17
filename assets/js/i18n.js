/**
 * Jana Apartman — shared i18n dictionary + language switcher.
 * Loaded via <script src> so it also works from file:// (no fetch/CORS needed).
 *
 * Usage in a page:
 *   <script src="../assets/js/i18n.js"></script>
 *   <script>JanaI18n.init();</script>
 * Mark elements with  data-i18n="hero.title"  to receive text.
 * Elements with  data-i18n-html  get innerHTML instead of textContent.
 */
(function (global) {
  "use strict";

  var DICT = {
    hu: {
      "meta.lang": "Magyar",
      "nav.about": "Bemutatkozás",
      "nav.features": "Kerékpáros szolgáltatások",
      "nav.gallery": "Galéria",
      "nav.booking": "Foglalás",
      "nav.location": "Elhelyezkedés",
      "nav.contact": "Kapcsolat",
      "hero.title": "Jana Apartman",
      "hero.subtitle": "Balatonkeresztúr · Kerékpáros pihenőhely a Balaton déli partján",
      "hero.cta_book": "Szabad időpontok",
      "hero.cta_explore": "Fedezd fel",
      "about.title": "Üdvözlünk a Jana Apartmanban",
      "about.body": "Kényelmes, világos apartman a Balaton déli partján, kerékpáros túrázók és egy éjszakára megpihenő vendégek számára egyaránt. Nyugodt környezet, közel a vízhez és a bringaúthoz.",
      "features.title": "Kerékpárosoknak kitalálva",
      "features.bike_title": "Biztonságos tárolás",
      "features.bike_desc": "Zárható kerékpártároló és szerelősarok a túranapok között.",
      "features.echarge_title": "E-bike töltőállomás",
      "features.echarge_desc": "Töltsd fel elektromos kerékpárod egy éjszaka alatt, indulhat a következő szakasz.",
      "features.overnight_title": "Egyéjszakás vendégek",
      "features.overnight_desc": "Csak egy éjszakára térnél be? Nálunk így is szeretettel várunk.",
      "amenities.title": "Felszereltség",
      "amenities.wifi": "Ingyenes Wi-Fi",
      "amenities.kitchen": "Felszerelt konyha",
      "amenities.parking": "Ingyenes parkolás",
      "amenities.ac": "Klíma",
      "amenities.terrace": "Terasz / kertkapcsolat",
      "amenities.laundry": "Mosási lehetőség",
      "gallery.title": "Galéria",
      "gallery.note": "A képek helyőrzők — a valódi fotók később kerülnek fel.",
      "booking.title": "Szabad időpontok és foglalás",
      "booking.subtitle": "A naptár a Google Naptárból frissül majd. Most helyőrző nézet látható.",
      "booking.legend_free": "Szabad",
      "booking.legend_busy": "Foglalt",
      "booking.cta": "Foglalási kérés küldése",
      "location.title": "Elhelyezkedés",
      "location.body": "Balatonkeresztúr, közvetlen kapcsolat a Balatoni bringakörúthoz. Strand, vasútállomás és boltok néhány perc alatt elérhetők.",
      "contact.title": "Kapcsolat",
      "contact.address": "8648 Balatonkeresztúr, Magyarország",
      "contact.email": "info@janaapartman.hu",
      "contact.phone": "+36 30 000 0000",
      "footer.rights": "Minden jog fenntartva.",
      "footer.mockup": "Ez egy dizájn-mockup, nem végleges tartalom."
    },
    en: {
      "meta.lang": "English",
      "nav.about": "About",
      "nav.features": "Cycling",
      "nav.gallery": "Gallery",
      "nav.booking": "Booking",
      "nav.location": "Location",
      "nav.contact": "Contact",
      "hero.title": "Jana Apartman",
      "hero.subtitle": "Balatonkeresztúr · A cyclist-friendly retreat on Lake Balaton's south shore",
      "hero.cta_book": "Check availability",
      "hero.cta_explore": "Explore",
      "about.title": "Welcome to Jana Apartman",
      "about.body": "A comfortable, bright apartment on the southern shore of Lake Balaton — made for cycling tourers and for guests who just want a good night's rest. Calm surroundings, close to the water and the bike path.",
      "features.title": "Built for cyclists",
      "features.bike_title": "Secure storage",
      "features.bike_desc": "Lockable bike storage and a repair corner between touring days.",
      "features.echarge_title": "E-bike charging station",
      "features.echarge_desc": "Charge your e-bike overnight and roll out fresh for the next stage.",
      "features.overnight_title": "Overnight guests",
      "features.overnight_desc": "Just staying one night? You're warmly welcome all the same.",
      "amenities.title": "Amenities",
      "amenities.wifi": "Free Wi-Fi",
      "amenities.kitchen": "Equipped kitchen",
      "amenities.parking": "Free parking",
      "amenities.ac": "Air conditioning",
      "amenities.terrace": "Terrace / garden access",
      "amenities.laundry": "Laundry option",
      "gallery.title": "Gallery",
      "gallery.note": "Images are placeholders — real photos will be added later.",
      "booking.title": "Availability & booking",
      "booking.subtitle": "The calendar will sync from Google Calendar. This is a placeholder view for now.",
      "booking.legend_free": "Free",
      "booking.legend_busy": "Booked",
      "booking.cta": "Send a booking request",
      "location.title": "Location",
      "location.body": "Balatonkeresztúr, directly connected to the Lake Balaton bike loop. Beach, train station and shops are minutes away.",
      "contact.title": "Contact",
      "contact.address": "8648 Balatonkeresztúr, Hungary",
      "contact.email": "info@janaapartman.hu",
      "contact.phone": "+36 30 000 0000",
      "footer.rights": "All rights reserved.",
      "footer.mockup": "This is a design mockup, not final content."
    },
    de: {
      "meta.lang": "Deutsch",
      "nav.about": "Über uns",
      "nav.features": "Für Radfahrer",
      "nav.gallery": "Galerie",
      "nav.booking": "Buchung",
      "nav.location": "Lage",
      "nav.contact": "Kontakt",
      "hero.title": "Jana Apartman",
      "hero.subtitle": "Balatonkeresztúr · Fahrradfreundliche Unterkunft am Südufer des Balaton",
      "hero.cta_book": "Verfügbarkeit prüfen",
      "hero.cta_explore": "Entdecken",
      "about.title": "Willkommen im Jana Apartman",
      "about.body": "Eine komfortable, helle Wohnung am Südufer des Balaton — für Radtouristen und für Gäste, die einfach gut übernachten möchten. Ruhige Umgebung, nah am Wasser und am Radweg.",
      "features.title": "Für Radfahrer gemacht",
      "features.bike_title": "Sichere Abstellmöglichkeit",
      "features.bike_desc": "Abschließbarer Fahrradraum und Reparaturecke zwischen den Touren.",
      "features.echarge_title": "E-Bike-Ladestation",
      "features.echarge_desc": "Lade dein E-Bike über Nacht und starte frisch in die nächste Etappe.",
      "features.overnight_title": "Übernachtungsgäste",
      "features.overnight_desc": "Nur eine Nacht? Auch dann bist du herzlich willkommen.",
      "amenities.title": "Ausstattung",
      "amenities.wifi": "Kostenloses WLAN",
      "amenities.kitchen": "Ausgestattete Küche",
      "amenities.parking": "Kostenlose Parkplätze",
      "amenities.ac": "Klimaanlage",
      "amenities.terrace": "Terrasse / Gartenzugang",
      "amenities.laundry": "Waschmöglichkeit",
      "gallery.title": "Galerie",
      "gallery.note": "Die Bilder sind Platzhalter — echte Fotos folgen später.",
      "booking.title": "Verfügbarkeit & Buchung",
      "booking.subtitle": "Der Kalender wird mit Google Kalender synchronisiert. Vorerst eine Platzhalter-Ansicht.",
      "booking.legend_free": "Frei",
      "booking.legend_busy": "Belegt",
      "booking.cta": "Buchungsanfrage senden",
      "location.title": "Lage",
      "location.body": "Balatonkeresztúr, direkt am Balaton-Radrundweg. Strand, Bahnhof und Geschäfte sind wenige Minuten entfernt.",
      "contact.title": "Kontakt",
      "contact.address": "8648 Balatonkeresztúr, Ungarn",
      "contact.email": "info@janaapartman.hu",
      "contact.phone": "+36 30 000 0000",
      "footer.rights": "Alle Rechte vorbehalten.",
      "footer.mockup": "Dies ist ein Design-Mockup, kein finaler Inhalt."
    }
  };

  var LANGS = ["hu", "en", "de"];
  var STORAGE_KEY = "jana.lang";

  function t(lang, key) {
    var table = DICT[lang] || DICT.hu;
    return table[key] != null ? table[key] : key;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "hu";
    document.documentElement.setAttribute("lang", lang);
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var val = t(lang, key);
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
    // reflect active state on any [data-lang] buttons
    var btns = document.querySelectorAll("[data-lang]");
    for (var j = 0; j < btns.length; j++) {
      btns[j].setAttribute("aria-pressed", btns[j].getAttribute("data-lang") === lang ? "true" : "false");
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init(defaultLang) {
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = stored || defaultLang || "hu";
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-lang]") : null;
      if (btn) {
        ev.preventDefault();
        apply(btn.getAttribute("data-lang"));
      }
    });
    apply(lang);
  }

  global.JanaI18n = { init: init, apply: apply, t: t, dict: DICT, langs: LANGS };
})(window);
