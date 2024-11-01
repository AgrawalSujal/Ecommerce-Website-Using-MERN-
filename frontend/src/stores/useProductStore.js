import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  setProducts: (products) => set({ products }),
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },
  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/category/${category}`);
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },
  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(`/products/${productId}`);
      set((prevProducts) => ({
        products: prevProducts.products.filter(
          (product) => product._id !== productId
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to delete product");
    }
  },
  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.patch(`/products/${productId}`);
      // this will update the isFeatured prop of the product
      set((prevProducts) => ({
        products: prevProducts.products.map((product) =>
          product._id === productId
            ? { ...product, isFeatured: response.data.isFeatured }
            : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to update product");
    }
  },
  fetchFeaturedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products/featured");
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      console.log("Error fetching featured products:", error);
    }
  },
}));

// import { create } from "zustand";
// import toast from "react-hot-toast";
// import axios from "../lib/axios";
// import { produce } from "immer"; // import immer

// export const useProductStore = create((set) => ({
//   products: [],
//   loading: false,
//   error: null,

//   setProducts: (products) => set({ products, error: null }),

//   setLoading: (loading) => set({ loading }),

//   handleError: (error, fallbackMessage = "An error occurred") => {
//     const message = error.response?.data?.error || fallbackMessage;
//     toast.error(message);
//     set({ error: message, loading: false });
//   },

//   createProduct: async (productData) => {
//     set({ loading: true, error: null });
//     try {
//       const res = await axios.post("/products", productData);
//       set((state) =>
//         produce(state, (draft) => {
//           draft.products.push(res.data);
//           draft.loading = false;
//         })
//       );
//       return res.data;
//     } catch (error) {
//       useProductStore.getState().handleError(error, "Failed to create product");
//     }
//   },

//   fetchAllProducts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axios.get("/products");
//       set({ products: response.data.products, loading: false });
//     } catch (error) {
//       useProductStore.getState().handleError(error, "Failed to fetch products");
//     }
//   },

//   fetchProductsByCategory: async (category) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axios.get(`/products/category/${category}`);
//       set({ products: response.data.products, loading: false });
//     } catch (error) {
//       useProductStore.getState().handleError(error, "Failed to fetch products");
//     }
//   },

//   deleteProduct: async (productId) => {
//     set({ loading: true, error: null });
//     try {
//       await axios.delete(`/products/${productId}`);
//       set((state) =>
//         produce(state, (draft) => {
//           draft.products = draft.products.filter(
//             (product) => product._id !== productId
//           );
//           draft.loading = false;
//         })
//       );
//       return productId;
//     } catch (error) {
//       useProductStore.getState().handleError(error, "Failed to delete product");
//     }
//   },

//   toggleFeaturedProduct: async (productId) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axios.patch(`/products/${productId}`);
//       set((state) =>
//         produce(state, (draft) => {
//           const product = draft.products.find((p) => p._id === productId);
//           if (product) product.isFeatured = response.data.isFeatured;
//           draft.loading = false;
//         })
//       );
//       return response.data;
//     } catch (error) {
//       useProductStore.getState().handleError(error, "Failed to update product");
//     }
//   },

//   fetchFeaturedProducts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axios.get("/products/featured");
//       set({ products: response.data, loading: false });
//     } catch (error) {
//       useProductStore
//         .getState()
//         .handleError(error, "Failed to fetch featured products");
//     }
//   },
// }));
