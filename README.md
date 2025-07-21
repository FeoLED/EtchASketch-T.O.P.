# EtchASketch-T.O.P. (The Odin Project)

A browser-based sketchpad where the cursor leaves a colorful trail as it moves over a resizable grid.
# Features

    16×16 grid (default) with dynamically generated divs

    Color-changing cells on hover (random RGB colors)

    Fully responsive grid layout with perfect squares

    Customizable grid size (2-100 cells per side)

    Input validation to prevent invalid entries

# Development Process

This project proved surprisingly smooth compared to my previous Rock-Paper-Scissors UI challenge.
Core Implementation

    Grid generation using for loops and DOM manipulation

    CSS aspect-ratio: 1 and Flexbox for perfect square cells

    Random color generation combining Math.round() and Math.random()

# Key Challenges

    * Grid Styling: Achieving the perfect grid appearance required experimenting with various Flexbox       properties until the cells displayed correctly.

    * Event Handling: Initially struggled with using "hover" instead of the correct mouse events (facepalm moment). Eventually implemented proper mouseover event listeners for color changes.

    *Dynamic Resizing:

        Added a button and number input for grid customization

        Used replaceChildren() to clear the existing grid (simpler than replacement approaches)

        Reapplied both styling and event listeners to new grid cells

        Implemented input validation (2-100 range) with error messaging

# Technologies Used

    HTML5

    CSS3 (Flexbox)

    JavaScript (DOM manipulation)


## Technical Details
- Uses `replaceChildren()` for grid resets
- Event listeners are reapplied dynamically after grid changes
- Input validation prevents non-numeric/out-of-range values