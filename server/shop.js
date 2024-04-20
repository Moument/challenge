const shop = {
  clothing: {
    id: 1,
    url: "clothing",
    name: "Clothing",
    shirts: {
      id: 1,
      url: "shirts",
      name: "Shirts",
      shirt: {
        id: 1,
        url: "shirt",
        name: "Shirt",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        brandId: 1,
        price: "59,99€",
        isNew: true,
        colors: [
          {
            name: "WHITE",
            path: "shirt/white",
            colorPathName: "white",
            colorHex: "#ffffff",
            availableSize: [1, 3, 4, 6]
          },
          {
            name: "RED",
            path: "shirt/red",
            colorPathName: "red",
            colorHex: "#d1001f",
            availableSize: [1, 2, 3, 5, 6]
          },
          {
            name: "NAVY",
            path: "shirt/navy",
            colorPathName: "navy",
            colorHex: "#000435",
            availableSize: [1, 2, 3, 4, 5, 6]
          },
          {
            name: "TURQUOISE",
            path: "shirt/turquoise",
            colorPathName: "turquoise",
            colorHex: "#40E0D0",
            availableSize: [2, 3, 4, 5, 6]
          },
          {
            name: "PETROL",
            path: "shirt/petrol",
            colorPathName: "petrol",
            colorHex: "#005F6A",
            availableSize: [1, 4, 5, 6]
          }
        ],
        productDetails: [
          {
            title: "Details",
            content: [
              {
                name: "Collar",
                value: "Button-down collar"
              },
              {
                name: "Fastener",
                value: "button placket"
              },
              {
                name: "Sleeves",
                value: "long sleeves"
              },
              {
                name: "Style",
                value: "In a casual look"
              },
              {
                name: "Occasion",
                value: "Casual"
              },
              {
                name: "EAN",
                value: "4099975316748"
              },
              {
                name: "Article Number",
                value: "2143570.6565.S"
              }
            ]
          },
          {
            title: "Fit",
            content: [
              {
                name: "Fit",
                value: "Regular Fit"
              },
              {
                name: "Back length",
                value: "approx. 76 cm in size L"
              }
            ]
          },
          {
            title: "Material & Care instructions",
            content: {
              materialWrap: {
                material: {
                  title: "Matrial",
                  content: [
                    {
                      name: "Fabric",
                      value: "Linen"
                    },
                    {
                      name: "Quality",
                      value: "high-quality"
                    }
                  ]
                },
                composition: {
                  title: "Matrial composition",
                  content: [
                    {
                      name: "Outer fabric",
                      value: "100% linen"
                    }
                  ]
                }
              },
              care: {
                title: "Care instructions",
                content: [
                  {
                    name: "washing",
                    value: "Machine wash 30°"
                  },
                  {
                    name: "bleach",
                    value: "Do not chlore."
                  },
                  {
                    name: "ironing",
                    value: "No hot ironing"
                  },
                  {
                    name: "tumble",
                    value: "Do not tumble"
                  },
                  {
                    name: "dryCleaning",
                    value: "No dry cleaning"
                  }
                ]
              }
            }
          },
          {
            title: "Sustainability",
            certified: true
          }
        ]
      },
      sweater: {
        id: 2,
        url: "sweater",
        name: "Sweater",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        brandId: 1,
        price: "59,99€",
        isNew: true,
        colors: [
          {
            name: "WHITE",
            path: "shirt/white",
            colorPathName: "white",
            colorHex: "#ffffff",
            availableSize: [1, 3, 4, 6]
          },
          {
            name: "RED",
            path: "shirt/red",
            colorPathName: "red",
            colorHex: "#d1001f",
            availableSize: [1, 2, 3, 5, 6]
          },
          {
            name: "NAVY",
            path: "shirt/navy",
            colorPathName: "navy",
            colorHex: "#000435",
            availableSize: [1, 2, 3, 4, 5, 6]
          },
          {
            name: "TURQUOISE",
            path: "shirt/turquoise",
            colorPathName: "turquoise",
            colorHex: "#40E0D0",
            availableSize: [2, 3, 4, 5, 6]
          },
          {
            name: "PETROL",
            path: "shirt/petrol",
            colorPathName: "petrol",
            colorHex: "#005F6A",
            availableSize: [1, 4, 5, 6]
          }
        ],
        productDetails: [
          {
            title: "Details",
            content: [
              {
                name: "Collar",
                value: "Button-down collar"
              },
              {
                name: "Fastener",
                value: "button placket"
              },
              {
                name: "Sleeves",
                value: "long sleeves"
              },
              {
                name: "Style",
                value: "In a casual look"
              },
              {
                name: "Occasion",
                value: "Casual"
              },
              {
                name: "EAN",
                value: "4099975316748"
              },
              {
                name: "Article Number",
                value: "2143570.6565.S"
              }
            ]
          },
          {
            title: "Fit",
            content: [
              {
                name: "Fit",
                value: "Regular Fit"
              },
              {
                name: "Back length",
                value: "approx. 76 cm in size L"
              }
            ]
          },
          {
            title: "Material & Care instructions",
            content: {
              materialWrap: {
                material: {
                  title: "Matrial",
                  content: [
                    {
                      name: "Fabric",
                      value: "Linen"
                    },
                    {
                      name: "Quality",
                      value: "high-quality"
                    }
                  ]
                },
                composition: {
                  title: "Matrial composition",
                  content: [
                    {
                      name: "Outer fabric",
                      value: "100% linen"
                    }
                  ]
                }
              },
              care: {
                title: "Care instructions",
                content: [
                  {
                    name: "washing",
                    value: "Machine wash 30°"
                  },
                  {
                    name: "bleach",
                    value: "Do not chlore."
                  },
                  {
                    name: "ironing",
                    value: "No hot ironing"
                  },
                  {
                    name: "tumble",
                    value: "Do not tumble"
                  },
                  {
                    name: "dryCleaning",
                    value: "No dry cleaning"
                  }
                ]
              }
            }
          },
          {
            title: "Sustainability",
            certified: true
          }
        ]
      }
    },
    jeans: {
      id: 2,
      url: "jeans",
      name: "Jeans",
    },
  },
  accessories: {
    id: 2,
    url: "accessories",
    name: "Accessories",
  },
  large_sizes: {
    id: 3,
    url: "large_sizes",
    name: "Large sizes",
  }
};
module.exports = shop;
