const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");

describe("sendPaymentRequestToApi", () => {
  it("Call the function calculateNumber with SUM type and correct args", () => {
    let calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    sinon.assert.alwaysCalledWithExactly(calculateNumberSpy, "SUM", 100, 20);
    calculateNumberSpy.restore();
  });
});
