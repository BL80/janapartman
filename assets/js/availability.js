/**
 * Jana Apartman — availability provider (Phase 1 stub).
 *
 * The real Phase 3 implementation will read free/busy from Google Calendar via
 * the Calendar API `events.list` endpoint using a referrer-restricted API key
 * on a PUBLIC calendar (JSON response, CORS-enabled — works from a static host).
 * OTA feeds (Airbnb/Booking.com .ics) can be merged in later behind this same
 * interface, so pages never need to change.
 *
 * Provider interface (Promise-based):
 *   getBusyDays({ year, month }) -> Promise<Set<number>>   // 1-based day numbers
 *
 * This file ships a MockProvider so the mockups render a believable calendar
 * fully offline. Swap `JanaAvailability.provider` in Phase 3.
 */
(function (global) {
  "use strict";

  // Deterministic pseudo-random so the same month always looks the same.
  function seeded(year, month) {
    var s = (year * 100 + month) >>> 0;
    return function () {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
  }

  var MockProvider = {
    getBusyDays: function (opts) {
      var year = opts.year, month = opts.month; // month: 1-12
      var days = new Date(year, month, 0).getDate();
      var rnd = seeded(year, month);
      var busy = new Set();
      // Scatter a few 2-4 night "bookings".
      var bookings = 2 + Math.floor(rnd() * 3);
      for (var b = 0; b < bookings; b++) {
        var start = 1 + Math.floor(rnd() * (days - 4));
        var len = 2 + Math.floor(rnd() * 3);
        for (var d = start; d < start + len && d <= days; d++) busy.add(d);
      }
      return Promise.resolve(busy);
    }
  };

  var MONTHS = {
    hu: ["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    de: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]
  };
  var WEEKDAYS = {
    hu: ["H","K","Sze","Cs","P","Szo","V"],
    en: ["Mo","Tu","We","Th","Fr","Sa","Su"],
    de: ["Mo","Di","Mi","Do","Fr","Sa","So"]
  };

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "hu";
  }

  /**
   * Render a month grid into a container element.
   * @param {HTMLElement} el
   * @param {{year?:number, month?:number}} [opts]
   */
  function renderInto(el, opts) {
    opts = opts || {};
    var now = new Date();
    var year = opts.year || now.getFullYear();
    var month = opts.month || (now.getMonth() + 1); // 1-12
    var lang = currentLang();

    API.provider.getBusyDays({ year: year, month: month }).then(function (busy) {
      var first = new Date(year, month - 1, 1);
      var offset = (first.getDay() + 6) % 7; // Monday-first
      var daysInMonth = new Date(year, month, 0).getDate();

      var html = '<div class="jana-cal">';
      html += '<div class="jana-cal__head">' +
        '<span class="jana-cal__title">' + MONTHS[lang][month - 1] + " " + year + "</span></div>";
      html += '<div class="jana-cal__grid">';
      WEEKDAYS[lang].forEach(function (w) {
        html += '<div class="jana-cal__dow">' + w + "</div>";
      });
      for (var i = 0; i < offset; i++) html += '<div class="jana-cal__cell jana-cal__cell--empty"></div>';
      for (var d = 1; d <= daysInMonth; d++) {
        var state = busy.has(d) ? "busy" : "free";
        html += '<div class="jana-cal__cell jana-cal__cell--' + state + '" title="' + state + '">' + d + "</div>";
      }
      html += "</div></div>";
      el.innerHTML = html;
    });
  }

  var API = {
    provider: MockProvider,
    MockProvider: MockProvider,
    renderInto: renderInto
  };
  global.JanaAvailability = API;
})(window);
