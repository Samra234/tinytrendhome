// js/script.js

// Product data: Arrays of objects for each category. Edit these to change products, images, prices, etc.
// Each product has: id, name, price, image, description (for detail pages)
const products = {
    vases: [
        { 
  id: 'vase1', 
  name: 'Geometric Flower Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase1.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern Geometric Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions: Approx. 5 x 5 x 7 inch (L x W x H)
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase2', 
  name: 'Geometric Flower Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase2.jpeg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern Geometric Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions: Approx. 3 x 3 x 7 inch (L x W x H)
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase3', 
  name: 'Geometric Flower Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase3.jpeg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern Geometric Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions: Top 2 inch/ Bottom 4 inch/ Height 7 inch
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase4', 
  name: 'Golden Metal Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase4.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern Geometric Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions: 11.5cmx11.5cmx15.5cm/4.53inchx4.53inchx6.10inch
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase5', 
  name: 'Geometric Flower Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase5.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern Geometric Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass

- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase6', 
  name: 'Metal vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase6.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Golden Metal Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- 
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase7', 
  name: 'Metal Flower Vase', 
  price: 1699.00, 
  image: 'images/vaseGallery/vase7.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Modern metal Flower Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass

- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase8', 
  name: 'Elegant Metal Flower Vase', 
  price: 1200.00, 
  image: 'images/vaseGallery/vase8.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Elegant Metal Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions: 3 x 3 x 7 inch (L x W x H)
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase9', 
  name: '4 Pcs Planter Set', 
  price: 899.00, 
  image: 'images/vaseGallery/vase9.webp', 
  description: `4 Pcs Planter Set
• Material: Plastic
• Number Of Pieces: 4 Pcs
• Color: Multicolor
• Package Includes: 4 x Planter`
},
{ 
  id: 'vase11', 
  name: 'Golden Metal Vase', 
  price: 1540.00, 
  image: 'images/vaseGallery/vase11.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Golden Metal Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase12', 
  name: 'Stylish Glass Vase', 
  price: 1500.00, 
  image: 'images/vaseGallery/vase12.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Stylish Glass Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions:  5 x 2 x 7 inch (L x W x H)
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
},
{ 
  id: 'vase13', 
  name: 'Stylish Glass Vase', 
  price: 999.00, 
  image: 'images/vaseGallery/vase13.jpg', 
  description: `Modern Home Decor Vase
- Material: Metal
- Number Of Pieces: 1 Pc
- Color: Golden
- Package Includes: 1 x Vase
- Stylish Glass Vase
- Elevate your home decor with this stylish golden geometric flower vase. Perfect for displaying fresh flowers, dried botanicals, or artificial plants, its unique design adds a touch of modern elegance to any tabletop, bookshelf, or mantle. Ideal for living rooms, bedrooms, and offices.
- Specifications:
- Material: Iron and glass
- Dimensions:  3 x 3 x 7 inch (L x W x H)
- Style: Modern, geometric
- Use: Decorative vase, home accent
- Color: Golden
- Package Includes:
- 1 x Golden Geometric Vase (No Flowers)
- Note:
- This listing is only for Iron Stand with glass tube, Flowers and other items shown in the photos are not included
- Please allow 1-3cm error due to manual measurement. pls make sure you do not mind before you purchase.`
}
  ],
    paintings: [
        { 
  id: 'painting1', 
  name: ' Islamic Wall Art', 
  price: 799.00, 
  image: 'images/walldecor/wall1.webp', 
  description: `• Material: MDF
• Number Of Pieces: 2 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Ambiance And Style To Any Space
• Color: Beige
• Package Includes: 2 x Wall Frame
• Length: 11 Inches
• Width: 8 Inches
• Height: 3 mm
• Package Includes: 2 Framed Canvases
• Material: MDF Wooden Frame + Premium Print
• Color Scheme: Beige | Black
• Size : Length 11 Inches , 8 inches Width (Each Frame )
• Shape: Rectangular Wall Panels`
        },
        { 
  id: 'painting2', 
  name: ' Islamic Wall Art', 
  price: 1200.00, 
  image: 'images/walldecor/wall2.webp', 
  description: `Set of 3 Wall Art Wooden Phototile Frames for Wall Decor
• Material: Wood
• Number Of Pieces: 3 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Available In Different Sizes And Styles, Adds Texture And Dimension
• Color: Multicolor
• Package Includes: 3 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches
• Height: 1 Inches
• Set of 3 Wall Art Wooden Phototile Frames for Wall Decor`
        },
        { 
  id: 'painting3', 
  name: ' Islamic Wall Art', 
  price: 1150.00, 
  image: 'images/walldecor/wall3.webp', 
  description: `• Material: Wood
• Number Of Pieces: 3 Pcs
• Color: Multicolor
• Package Includes: 3 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting4', 
  name: 'Butterfly Design Wall Frame', 
  price: 1150.00, 
  image: 'images/walldecor/wall4.webp', 
  description: `• Material: Wood
• Number Of Pieces: 3 Pcs
• Product Design: Butterfly Design
• Color: Multicolor
• Package Includes: 1 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting5', 
  name: ' Islamic Wall Art', 
  price: 1600.00, 
  image: 'images/walldecor/wall5.jpeg', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: Abstract Art
• Product Feature: Adjustable Shelves For Customizable Storage, Adds Personality To Spaces
• Color: Multicolor
• Package Includes: 5 x Wall Art & Paintings
• Length: 8 Inches
• Width: 11 Inches
• Height: 1 Inches
• Set of 5 Wall Art Wooden Phototile Frames for Wall Decor`
        },
        { 
  id: 'painting6', 
  name: 'Flower Design Wall Art', 
  price: 1499.00, 
  image: 'images/walldecor/wall6.webp', 
  description: `• Material: MDF Wood
• Number Of Pieces: 5 Pcs
• Product Design: Flower Design
• Product Feature: Easy To Install, Enhances Decor, Enhances Room Decor
• Color: Multicolor
• Package Includes: 1 x Wall Art & Paintings
• Length: 8 Inches
• Width: 11 Inches
• Height: 1 Inches`
        },
        { 
  id: 'painting7', 
  name: 'Floral Wall Art Set ', 
  price: 1099.00, 
  image: 'images/walldecor/wall7.webp', 
  description: `• Material: MDF
• Number Of Pieces: 3 Pcs
• Product Design: Flower Design
• Product Feature: Adds Ambiance And Style To Any Space
• Color: Black
• Package Includes: 3 x Wall Frame
• Length: 11 Inches
• Width: 8 Inches
• Height: 3 mm`
        },
        { 
  id: 'painting8', 
  name: ' Islamic Wall Art', 
  price: 1199.00, 
  image: 'images/walldecor/wall8.webp', 
  description: `• Material: MDF
• Number Of Pieces: 3 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Ambiance And Style To Any Space, Adds Functionality And Aesthetic Appeal To Walls
• Color: Off White
• Package Includes: 3 x Wall Frame
• Length: 11 Inches
• Width: 8 Inches
• Height: 3 mm
• Material: Premium MDF Wood with Glossy Lamination
• Color: Black Arabic Calligraphy on White Marble & Gold Background`
        },
        { 
  id: 'painting9', 
  name: ' Islamic Wall Art', 
  price: 799.00, 
  image: 'images/walldecor/wall9.webp', 
  description: `• Material: Wood
• Number Of Pieces: 1 Pc
• Product Design: Islamic Verse Design
• Color: Multicolor
• Package Includes: 1 x Wall Art & Paintings
• Length: 11 Inches
• Width: 8 Inches
• Height: 1 Inches`
        },
        { 
  id: 'painting10', 
  name: 'Abstract Art Wall Art', 
  price: 999.00, 
  image: 'images/walldecor/wall10.webp', 
  description: `• Material: Wood
• Number Of Pieces: 3 Pcs
• Product Design: Abstract Art
• Color: Multicolor
• Package Includes: 3 x Wall Frame
• Length: 11 Inches
• Width: 8 Inches
• Height: 1 Cm`
        },
        { 
  id: 'painting11', 
  name: ' Islamic Wall Art', 
  price: 1799.00, 
  image: 'images/walldecor/wall11.webp', 
  description: `• Material: Wood
• Number Of Pieces: 9 Pcs
• Product Design: Islamic Verse Design
• Color: Multicolor
• Package Includes: 9 x Wall Art & Paintings
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting12', 
  name: ' Islamic Wall Art', 
  price: 1999.00, 
  image: 'images/walldecor/wall12.webp', 
  description: `• Material: Wood
• Number Of Pieces: 9 Pcs
• Product Design: Islamic Verse Design
• Product Feature: Adds Functionality And Aesthetic Appeal To Walls
• Color: Multicolor
• Package Includes: 9 x Wall Art & Paintings
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting13', 
  name: ' Islamic Wall Art', 
  price: 1599.00, 
  image: 'images/walldecor/wall13.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: Qul Calligraphy Design
• Color: Multicolor
• Package Includes: 5 x Wall Frame
• Length: 16 Inches
• Width: 40 Inches`
        },
        { 
  id: 'painting14', 
  name: 'Tree Design Wall Frame', 
  price: 1599.00, 
  image: 'images/walldecor/wall14.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: Tree Design
• Color: Pink
• Package Includes: 1 x Wall Frame
• Length: 16 Inches
• Width: 40 Inches`
        },
        { 
  id: 'painting15', 
  name: 'Abstract Art Wall Frame', 
  price: 1699.00, 
  image: 'images/walldecor/wall15.webp', 
  description: `•• Material: Wood
• Number Of Pieces: 6 Pcs
• Product Design: Abstract Art
• Color: Multicolor
• Package Includes: 6 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting16', 
  name: 'Flower Design Wall Frame', 
  price: 1040.00, 
  image: 'images/walldecor/wall16.webp', 
  description: `• Material: Wood
• Number Of Pieces: 3 Pcs
• Product Design: Flower Design
• Color: Multicolor
• Package Includes: 3 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting17', 
  name: ' Islamic Wall Art', 
  price: 1699.00, 
  image: 'images/walldecor/wall17.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: Islamic Verse Design
• Color: Multicolor
• Package Includes: 1 x Wall Frame
• Length: 16 Inches
• Width: 40 Inches`
        },
        { 
  id: 'painting18', 
  name: 'Deer Design Wall Frame', 
  price: 1699.00, 
  image: 'images/walldecor/wall18.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: Deer Design
• Color: Multicolor
• Package Includes: 1 x Wall Frame
• Length: 16 Inches
• Width: 40 Inches`
        },
        { 
  id: 'painting19', 
  name: 'Multicolor Wall Frame Set', 
  price: 1199.00, 
  image: 'images/walldecor/wall19.webp', 
  description: `Transform your living space with our stunning 3 Pcs Multicolor Wall Frame Set. Crafted from high-quality wood, these frames bring vibrant colors to any room. Perfect for displaying your favorite moments or artworks, they add a touch of personality to your decor. Embrace a stylish and modern look with this eye-catching wall frame set!
• Material: Wood
• Number Of Pieces: 3 Pcs
• Color: Multicolor
• Package Includes: 3 x Wall Frame
• Length: 8 Inches
• Width: 11 Inches`
        },
        { 
  id: 'painting20', 
  name: ' Islamic Wall Art', 
  price: 1399.00, 
  image: 'images/walldecor/wall20.jpg', 
  description: `• Material: Wood
• Number Of Pieces: 4 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Functionality And Aesthetic Appeal To Walls, Adds Ambiance And Style To Any Space
• Color: Multicolor
• Package Includes: 4 x Wall Art & Paintings
• Length: 8 Inches
• Width: 11 Inches
• Height: 1 Inches
• Set of 4 Wall Art Wooden Phototile Frames for Wall Decor`
        },
        { 
  id: 'painting21', 
  name: ' Islamic Wall Art', 
  price: 1899.00, 
  image: 'images/walldecor/wall21.jpg', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Available In Multiple Colors And Sizes, Adds Texture And Dimension
• Color: Multicolor
• Package Includes: 5 x Wall Frame
• Length: 8 Inches
• Width: 16 Inches
• Height: 1 Inches
• Set of 5 Wall Art Wooden Phototile Frames for Wall Decor`
        },
        { 
  id: 'painting22', 
  name: ' Islamic Wall Art', 
  price: 1799.00, 
  image: 'images/walldecor/wall22.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Personality To Spaces
• Color: Multicolor
• Package Includes: 5 x Wall Frame
• Length: 8 Inches
• Width: 16 Inches
• Height: 1 Inches
• set of 5 wall decore`
        },
        { 
  id: 'painting23', 
  name: ' Islamic Wall Art', 
  price: 1799.00, 
  image: 'images/walldecor/wall23.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Ambiance And Style To Any Space, Adds Texture And Dimension
• Color: Multicolor
• Package Includes: 1 x Wall Frame
• Length: 8 Inches
• Width: 16 Inches
• Height: 2 Inches
• set of 5 wall decore`
        },
        { 
  id: 'painting24', 
  name: ' Islamic Wall Art', 
  price: 1799.00, 
  image: 'images/walldecor/wall24.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Functionality And Aesthetic Appeal To Walls, Adds Personality To Spaces
• Color: Multicolor
• Package Includes: 1 x Wall Frame
• Length: 8 Inches
• Width: 16 Inches
• Height: 1 Inches
• Set of 5 Wall Art Wooden Phototile Frames for Wall Decor`
        },
        { 
  id: 'painting25', 
  name: ' Islamic Wall Art', 
  price: 1799.00, 
  image: 'images/walldecor/wall25.webp', 
  description: `• Material: Wood
• Number Of Pieces: 5 Pcs
• Product Design: 3D Calligraphy
• Product Feature: Adds Texture And Dimension, Adds Functionality And Aesthetic Appeal To Walls
• Color: Multicolor
• Package Includes: 1 x Wall Art & Paintings
• Length: 8 Inches
• Width: 16 Inches
• Height: 1 Inches
• Set of 5 Wall Art Wooden Phototile Frames for Wall Decore`
        },

],
    decor: [
      
        { 
          id: 'decor1', 
          name: 'Lamp For Room', 
          price: 2999.00, 
          image: 'images/tabledecor/tabledecor1.webp', 
          description: `• Material: Wood
          • Number Of Pieces: 1 Pc
          • Product Design: Abstract Art
          • Product Feature: Adds A Finishing Touch To Interior Design Schemes
          • Color: Dark Brown
          • Package Includes: 1 x Decorative Piece
          • Length: 24 Inches
          • Width: 6 Inches
          • Set of 5 Wall Art Wooden Phototile Frames for Wall Decore
          • Set of 5 Wall Art Wooden Phototile Frames for Wall Decore
          • Height: 5 mm`
       },
       { 
          id: 'decor2', 
          name: '3D Moving Sand Art', 
          price: 1999.00, 
          image: 'images/tabledecor/decor2.webp', 
          description: `• Material: Acrylic
          • Number Of Pieces: 1 Pc
          • Product Feature: Decoration Along With Boredom Killer.
          • Color: Multicolor
          • Package Includes: 1 x 3D Moving Sand Art`
       },
       { 
          id: 'decor3', 
          name: 'Abstract Art Wind Chime Bell', 
          price: 1399.00, 
          image: 'images/tabledecor/decor3.jpg', 
          description: `• Material: Metal
         • Number Of Pieces: 2 Pcs
         • Product Design: Abstract Art
         • Product Feature: Adds A Touch Of Greenery To Any Setting, Enhances Ambiance And Visual Appeal
         • Color: Golden, Black
         • Package Includes: 1 x Wind Chime Bell`
       },
       { 
          id: 'decor4', 
          name: '3D Calligraphy Glass Sculpture', 
          price: 1099.00, 
          image: 'images/tabledecor/decor4.jpeg', 
          description: `• Material: Glass
          • Number Of Pieces: 1 Pc
          • Product Design: 3D Calligraphy
          • Product Feature: Adds A Finishing Touch To Interior Design Schemes
          • Color: Multicolor
          • Package Includes: 1 x Glass Sculpture
          • Length: 2.28 Inches
          • Width: 2.28 Inches
          • Height: 1.5 Inches
          • Product Name: Decorations Glass Duck Model Small Size`
       },
       { 
          id: 'decor5', 
          name: 'Acrylic Hexa, Golden', 
          price: 810.00, 
          image: 'images/tabledecor/decor5.jpg', 
          description: `Upgrade Your House With This Beautiful Product
          • Material: Mirror Acrylic
          • Size: 3.5 x 3.5 Inches
          • Package Includes: Complete Box Among With Double Tape To Hang
          • Make Your Home Beautiful
          • This Product Enhances Any Home With On-trend Style And Beautiful Eye-catching Modern Design`
       },
       { 
          id: 'decor6', 
          name: 'Versace Border, Golden', 
          price: 1030.00, 
          image: 'images/tabledecor/decor6.jpg', 
          description: `Upgrade Your House With This Beautiful Product
• Material: Mirror Acrylic
• Size: 4 x 4 Inches
• Pack Of Six Versace Border
• Package Includes: Complete Box Among With Double Tape To Hang
• Make Your Home Beautiful
• This Product Enhances Any Home With On-trend Style And Beautiful Eye-catching Modern Design`
       },
       { 
          id: 'decor7', 
          name: 'Mini Decoration Tree Lamp', 
          price: 1080.00, 
          image: 'images/tabledecor/decor7.jpg', 
          description: `Home Decoration Collection
• Material: Glass
• Product Type: Lamp
• Product Feature: Decoration Lamp
• Size: 2 x 3 inches
• Package Included: 1 x Mini Tree Lamp
size: 2x3 inches`
       },
       { 
          id: 'decor8', 
          name: 'Mini Decoration Table Lamp', 
          price: 1080.00, 
          image: 'images/tabledecor/decor8.jpg', 
          description: `• Material: Glass
• Product Type: Lamp
• Product Feature: Decoration Lamp
• Size: 3x 3 inches
• Package Included: 1 x Mini Table Lamp
size: 3x3`
       },
       { 
          id: 'decor9', 
          name: 'Metal Monument ', 
          price: 1599.00, 
          image: 'images/tabledecor/decor9.jpg', 
          description: `Rotatable London Eye for home and office Decor - 1 Pc Decorative Piece
          • Material: Metal
• Number Of Pieces: 1 Pc
• Product Design: Abstract Art
• Product Feature: Adds A Finishing Touch To Interior Design Schemes, Unique And Eye-Catching Design
• Color: Golden
• Package Includes: 1 x Decorative Piece`
       },
       { 
          id: 'decor10', 
          name: 'Metal Monument', 
          price: 1080.00, 
          image: 'images/tabledecor/decor10.jpg', 
          description: `Eiffel Tower for Home and Office Decor - 1 Pc - 9 Inches• Material: Metal
• Number Of Pieces: 1 Pc
• Product Design: Abstract Art
• Product Feature: Adds A Finishing Touch To Interior Design Schemes
• Color: Black, Golden
• Package Includes: 1 x Metal Sculpture`
       },
       { 
          id: 'decor11', 
          name: 'Mini Colorful Rikshaw ', 
          price: 1599.00, 
          image: 'images/tabledecor/decor11.jpg', 
          description: `• Material: Acrylic
• Number Of Pieces: 1 Pc
• Product Design: Mini
• Product Feature: Vibrant And Colorful Design
• Color: Multicolor
• Package Includes: 1 x Rikshaw
size: standard`
       },
       { 
          id: 'decor12', 
          name: 'Mini Multicolor Truck', 
          price: 1599.00, 
          image: 'images/tabledecor/decor12.jpg', 
          description: `• Material: Acrylic
• Number Of Pieces: 1 Pc
• Product Design: Mini
• Product Feature: Vibrant And Colorful Design
• Color: Multicolor
• Package Includes: 1 x Truck
`
       },
       { 
          id: 'decor13', 
          name: 'Metal Monument', 
          price: 2680.00, 
          image: 'images/tabledecor/decor13.jpg', 
          description: `• Material: Metal
• Number Of Pieces: 1 Pc
• Product Design: Abstract Art
• Product Feature: Adds A Touch Of Greenery To Any Setting, Enhances Decor And Personalizes Space
• Color: Golden, Black
• Package Includes: 1 x Metal Sculpture
• Length: 12 Inches
• Width: 3 Inches
• Height: 5 Inches`
       },
       { 
          id: 'decor14', 
          name: '10 Pcs Off White Metal Art', 
          price: 2599.00, 
          image: 'images/tabledecor/decor14.webp', 
          description: `• Material: Metal
• Number Of Pieces: 5 Pcs
• Product Design: DIY Design
• Product Feature: Durable Material For Indoor/Outdoor Use
• Color: Off White
• Package Includes: 10 x Decorative Piece
• Length: 16 Cm
• Width: 10 Cm
• Height: 10 Cm`
       },
       
        ]
};

// Cart data: Stored in localStorage for persistence
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to load products into the grid on category pages
function loadProducts(category) {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Safety check
    grid.innerHTML = ''; // Clear existing content
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>RS${product.price.toFixed(2)}</p>
            <button onclick="window.location.href='product-${product.id}.html'">View Details</button>
        `;
        grid.appendChild(productCard);
    });
}

// Function to add a product to the cart (Keep only this version – the logged one)
function addToCart(productId, quantity) {
    console.log('Adding product:', productId, 'Quantity:', quantity);
    console.log('Cart before add:', cart);
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (!product) {
        console.error('Product not found for ID:', productId);
        return;
    }
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += parseInt(quantity);
        console.log('Incremented existing item at index', existingIndex, ':', cart[existingIndex]);
    } else {
        cart.push({ ...product, quantity: parseInt(quantity) });
        console.log('Added new item:', product);
    }
    saveCart();
    updateCartCount();
    alert('Added to cart!');
}

// Function to save cart to localStorage
function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart to localStorage:', e);
    }
}

// Function to load and display cart on cart.html
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems || !cartTotal) return;
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = '<h3>Total: RS0.00</h3>';
        return;
    }
    let total = 0;
    cart.forEach((item, index) => {
        // NEW: Validate and sanitize item data to prevent errors
        const price = (item.price && !isNaN(item.price)) ? parseFloat(item.price) : 0;
        const quantity = (item.quantity && !isNaN(item.quantity) && item.quantity > 0) ? parseInt(item.quantity) : 1; // Default to 1 if invalid
        const subtotal = price * quantity;
        total += subtotal;
        
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image || 'placeholder.jpg'}" alt="${item.name || 'Unknown Product'}" loading="lazy">
                <div>
                    <h4>${item.name || 'Unknown Product'}</h4>
                    <p>RS${price.toFixed(2)} x <input type="number" value="${quantity}" min="1" onchange="updateQuantity(${index}, this.value)"> = RS${subtotal.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });
    cartTotal.innerHTML = `<h3>Total: RS${total.toFixed(2)}</h3>`;
    updateCartCount();
}

// Function to update quantity in cart
function updateQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity < 1 || isNaN(newQuantity)) {
        alert('Quantity must be at least 1.');
        return;
    }
    cart[index].quantity = newQuantity;
    saveCart();
    loadCart(); // Reload to update totals
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    loadCart();
}

// Function to load order summary on checkout.html
function loadOrderSummary() {
    const summary = document.getElementById('order-summary');
    if (!summary) return;
    summary.innerHTML = '<h3>Order Summary</h3>';
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        summary.innerHTML += `<p>${item.name} x ${item.quantity} = RS${subtotal.toFixed(2)}</p>`;
    });
    summary.innerHTML += `<p><strong>Total: RS${total.toFixed(2)}</strong></p>`;
}

// Function to update cart count in navigation
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Cart modal functionality (bonus: simple popup)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('cart-modal');
    const cartLink = document.getElementById('cart-link');
    const closeBtn = document.querySelector('.close');
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            const preview = document.getElementById('cart-preview');
            preview.innerHTML = cart.length ? cart.map(item => `<p>${item.name} x ${item.quantity}</p>`).join('') : '<p>Cart is empty.</p>';
            modal.style.display = 'block';
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    updateCartCount(); // Initialize on page load

    // Auto-load cart/order summary on relevant pages
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    if (document.getElementById('order-summary')) {
        loadOrderSummary();
    }

    // Handle checkout button click (moved from inline HTML for better reliability)
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }
});
