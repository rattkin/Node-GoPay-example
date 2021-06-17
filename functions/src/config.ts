import {CorsOptions} from "cors";

export const corsOptions: CorsOptions = {
  credentials: true,
  origin: function(origin: CorsOptions["origin"], callback) {
    if (origin === undefined) {
      callback(null, true);
    } else {
      if (typeof (origin) !== "string") {
        callback(new Error("origin not string"));
      }

      const myURL = new URL(origin.toString());
      const isDomainAllowed = DomainWhitelist.indexOf(myURL.hostname) !== -1;
      const isExtensionAllowed = false; // origin.endsWith('.jpg');

      if (isDomainAllowed || isExtensionAllowed) {
        // allow CORS for this request
        callback(null, true);
      } else {
        // disallow CORS for this request
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  methods: "GET,HEAD,PUT,POST,DELETE",
};

export const DomainWhitelist = [
  "https://angular-gopay-example.web.app/",
];
