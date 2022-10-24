const { saveOrder } = require("../src/services/order.service");

const { expect } = require("chai");
const Order = require("../src/models/orders")
const sinon = require("sinon");

describe("Order Service Unit Tests", function () {
  this.afterEach(() => {
    sinon.restore();
  })
  describe("Save order functionality", function () {
    
    it("should successfully add a order", async function () {
      
      const customerId = "467rgr784t87";
      const orderId = "3w23344";
      const productId = "20201212";
      const amount = 100;
      const status = "pending";
      
      sinon.stub(Order, "countDocuments").returns(0);
      sinon.stub(Order.prototype, "save").returns(
       { customerId, orderId, productId, amount, status }
      );

      const returnedOrder = await saveOrder({
        customerId,
        orderId,
        productId,
        amount,
        status
      });

      expect(returnedOrder.orderId).to.equal(orderId);
      expect(returnedOrder.productId).to.equal(productId);
      expect(returnedOrder.amount).to.equal(amount);
      
    });
  });
});