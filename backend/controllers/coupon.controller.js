import Coupon from "../models/Coupon.model.js";

export const getCoupon = async (req, res) => {
  try {
    const Coupon = await Coupon.findOne({
      userId: req.user._id,
      isActive: true,
    });
    res.json(Coupon || null);
  } catch (error) {
    console.log("Error in getCoupon controller", error.message);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const validateCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    const Coupon = await Coupon.findOne({
      code: code,
      userId: req.user._id,
      isActive: true,
    });
    if (!Coupon) {
      return res.status(404).json({
        message: "Coupon not found!!",
      });
    }
    if (Coupon.expirationDate < new Date()) {
      (Coupon.isActive = false), await Coupon.save();
      return res.status(404).json({
        message: "Coupon expired",
      });
    }
    res.json({
      message: "Coupon is valid",
      code: Coupon.code,
      discountPercentage: Coupon.discountPercentage,
    });
  } catch (error) {
    console.log("Error in getCoupon controller", error.message);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
