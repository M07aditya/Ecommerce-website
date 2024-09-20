const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASuhrZKJMvddDpnFhVGaWVKXKCOmKsQVoTZ-Byi3pxT74OovQ_PRxEyaDZGJtxhUsv3CR-jBG8WFCZLq",
  client_secret: "EFaa_3tP1xVRUddWlGSrlKfhl1d3uFlddfAnd7IAj2cLPCTsxtHNaLdARp9D_r2_QTmMXpCYOEtZzLzf",
});

module.exports = paypal;
