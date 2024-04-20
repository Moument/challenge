const products = {
    clothing: {
        shirts:  { 
            shirt: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
                name: 'Shirt',
                colors: [
                  {
                    name: 'WHITE',
                    path: '/product/clothing/shirts/shirt/white',
                    colorPathName: '/product/clothing/shirts/shirt/navy',
                    availableSize: [
                      {
                        size: 'M',
                        price: '59,99'
                      },
                      {
                        size: 'L',
                        price: '59,99'
                      },
                      {
                        size: 'XL',
                        price: '59,99'
                      },
                      {
                        size: 'XXL',
                        price: '59,99'
                      },
                      {
                        size: '3XL',
                        price: '59,99'
                      },
                    ]
                  },
                  {
                    name: 'RED',
                    path: '/product/clothing/shirts/shirt/red',
                    colorPathName: '/product/clothing/shirts/shirt/navy',
                    availableSize: [
                      {
                        size: 'M',
                        price: '59,99'
                      },
                      {
                        size: 'L',
                        price: '59,99'
                      },
                      {
                        size: 'XL',
                        price: '59,99'
                      },
                      {
                        size: 'XXL',
                        price: '59,99'
                      },
                      {
                        size: '3XL',
                        price: '59,99'
                      },
                    ]
                  },
                  {
                    name: 'NAVY',
                    path: '/product/clothing/shirts/shirt/navy',
                    colorPathName: '/product/clothing/shirts/shirt/navy',
                    availableSize: [
                      {
                        size: 'M',
                        price: '59,99'
                      },
                      {
                        size: 'L',
                        price: '59,99'
                      },
                      {
                        size: 'XL',
                        price: '59,99'
                      },
                      {
                        size: 'XXL',
                        price: '59,99'
                      },
                      {
                        size: '3XL',
                        price: '59,99'
                      },
                    ]
                  },
                  {
                    name: 'TURQUOISE',
                    path: '/product/clothing/shirts/shirt/turquoise',
                    colorPathName: '/product/clothing/shirts/shirt/navy',
                    availableSize: [
                      {
                        size: 'M',
                        price: '59,99'
                      },
                      {
                        size: 'L',
                        price: '59,99'
                      },
                      {
                        size: 'XL',
                        price: '59,99'
                      },
                      {
                        size: 'XXL',
                        price: '59,99'
                      },
                      {
                        size: '3XL',
                        price: '59,99'
                      },
                    ]
                  },
                  {
                    name: 'PETROL',
                    path: '/product/clothing/shirts/shirt/petrol',
                    colorPathName: '/product/clothing/shirts/shirt/navy',
                    availableSize: [
                      {
                        size: 'M',
                        price: '59,99'
                      },
                      {
                        size: 'L',
                        price: '59,99'
                      },
                      {
                        size: 'XL',
                        price: '59,99'
                      },
                      {
                        size: 'XXL',
                        price: '59,99'
                      },
                      {
                        size: '3XL',
                        price: '59,99'
                      },
                    ]
                  }
                ],
                productDetails: {
                  productDescription: {
                    name: "DETAILS",
                    detailData: {
                        collar: 'Button-down collar',
                        fastener : 'button placket',
                        sleeve: 'long sleeves',
                        style: 'In a casual look',
                        occasion: 'Casual',
                        ean: '4099975316748',
                        articleNumber: '2143570.6565.S'
                    }
                  },
                  fit: {
                    fit: 'Regular Fit',
                    backLength: 'approx. 76 cm in size L'
                  },
                  materialCare: {
                    material: {
                      fabric: 'Linen',
                      quality: 'high-quality',
                      composition: '100% linen'
                    },
                    careInstructions: {
                      washing: 'Machine wash 30°',
                      bleach: 'Do not chlore',
                      ironing: 'No hot ironing',
                      tumble: 'Do not tumble',
                      dryCleaning: 'No dry cleaning'
                    }
                  },
                  sustainability: {
                    label: 'Nachhaltigkeit ist uns wichtig. Unsere Produkte werden unter fairen Bedingungen hergestellt.',
                    certified: true,
                  }
                }
            },
        }
    }
   
};
module.exports = products;
