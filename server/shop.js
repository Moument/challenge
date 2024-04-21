const shop = {
  clothing: {
    id: 1,
    url: "clothing",
    name: "Clothing",
    shirts: {
      id: 1,
      url: "shirts",
      name: "Shirts",
      slim_fit_short_sleeve_shirt_with_a_kent_collar: {
        id: 2,
        url: "slim_fit_short_sleeve_shirt_with_a_kent_collar",
        name: "Slim fit: short sleeve shirt with a Kent collar",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        brandLogoPath: "brands/soliver",
        price: "39,99€",
        isNew: false,
        colors: [
          {
            name: "ORANGE",
            path: "short_sleeve/orange",
            colorPathName: "orange",
            colorHex: "#f27981",
            availableSize: [1, 3, 4, 6]
          },
          {
            name: "NAVY",
            path: "short_sleeve/navy",
            colorPathName: "navy",
            colorHex: "#000080",
            availableSize: [1, 2, 5, 6]
          },
          {
            name: "LIGHT PETROL",
            path: "short_sleeve/light_petrol",
            colorPathName: "light_petrol",
            colorHex: "#005f6a",
            availableSize: [1, 2, 3, 4, 6]
          }
        ],
        productDetails: [
          {
            title: "Details",
            content: [
              {
                name: "Collar",
                value: "Kent collar"
              },
              {
                name: "Fastener",
                value: "buttons, button placket"
              },
              {
                name: "Sleeves",
                value: "short sleeves"
              },
              {
                name: "Pockets",
                value: "breast pocket, patch pocket"
              },
              {
                name: "Style",
                value: "In a clean look"
              },
              {
                name: "Occasion",
                value: "Casual"
              },
              {
                name: "EAN",
                value: "4099975325702"
              },
              {
                name: "Article Number",
                value: "2143569.59M1.M"
              }
            ]
          },
          {
            title: "Fit",
            content: [
              {
                name: "Fit",
                value: "Slim Fit"
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
                      value: "slub yarn"
                    },
                    {
                      name: "Quality",
                      value: "soft"
                    }
                  ]
                },
                composition: {
                  title: "Matrial composition",
                  content: [
                    {
                      name: "Outer fabric",
                      value: "98% cotton, 2% elastane"
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
      shirt: {
        id: 1,
        url: "shirt",
        name: "Shirt",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        brandLogoPath: "brands/soliver",
        price: "59,99€",
        isNew: true,
        colors: [
          {
            id: 1,
            name: "WHITE",
            path: "shirt/white",
            colorPathName: "white",
            colorHex: "#ffffff",
            availableSize: [1, 3, 4, 6]
          },
          {
            id: 2,
            name: "RED",
            path: "shirt/red",
            colorPathName: "red",
            colorHex: "#d1001f",
            availableSize: [1, 2, 3, 5, 6]
          },
          {
            id: 3,
            name: "NAVY",
            path: "shirt/navy",
            colorPathName: "navy",
            colorHex: "#000435",
            availableSize: [1, 2, 3, 4, 5, 6]
          },
          {
            id: 4,
            name: "TURQUOISE",
            path: "shirt/turquoise",
            colorPathName: "turquoise",
            colorHex: "#40E0D0",
            availableSize: [2, 3, 4, 5, 6]
          },
          {
            id: 5,
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
                value: "Button_down collar"
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
                      value: "high_quality"
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
  },
};
module.exports = shop;
