const explorer = {
    name: "Beverages",
    isFolder: true,
    items: [
      {
         name  : "water",
         isFolder : true,
         items : []
      },
      {
        name: "coffee",
        isFolder: true,
        items: [
          {
            name: "Black Coffee",
            isFolder: true,
            items: []
          }
        ]
      },
      {
        name: "Tea",
        isFolder: true,
        items: [
          {
            name: "Black Tea",
            isFolder: true,
            items: []
          },
          {
            name: "White Tea",
            isFolder: false,
            items: []
          },
          {
            name: "Green Tea",
            isFolder: true,
            items: [
              {
                name : "Sencha",
                isFolder : true,
                items : []
              },
              {
                name : "Gyokuro",
                isFolder : true,
                items : []
              },
              {
                name : "Matcha",
                isFolder : true,
                items : []
              }, {
                name : "Pi Lo Chun",
                isFolder : true,
                items : []
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default explorer;
  