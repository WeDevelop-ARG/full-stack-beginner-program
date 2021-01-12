[« Back to Index](../../README.md)

# Block 3: Front-End Architecture (2 weeks)

## Contents
- Component Diagrams
- Container, Presenter, Page and View components
- React Prop Types
- React Custom Hooks
- React Router

## Resources

### Architecture
  - Container: Also known as "Controller", is a component responsible for containing views and interact with them (event management). It uses presenters to retrieve data and pass it to the views as props. Locate it under `/src/components`
  - Presenter: The presenter acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view. Locate it under `/src/hooks`.
  - Page: A page is a component only responsible for **navigation** and rendering content. It is the only one that can interact with the Router. Locate it under `/src/pages`.
  - View: The view is a passive interface that displays data (from the model) and routes user commands (events) to the container/controller to act upon that data. Locate it under `/src/components`.

### React
  - Typechecking With PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
  - Building Your Own Hooks: https://reactjs.org/docs/hooks-custom.html
  - Navigational components with React Router: https://reactrouter.com/web/guides/quick-start

## Tasks

Ask your Leader to give you access to the UI Design selected for this training and follow the next stepts:

1. Level Zero: UX/UI Design
  - From the given Design, identify all the required components.
2. Level One: Develop Wireframes
  - Create wireframes to represent the design at a base component level.
3. Level Two: Component Diagram
  - Create a diagram including page, container and view components with its props.
4. Implementation
  - Implement each component using React, without styles and focusing on architecture and working logic only (Version 1).
  - Specify React Prop Types for components with props.
  - Use React Custom Hooks to implement presenters.
  - Use React Router for page navigation.

## Bonus

- Chapter 23: Presenters and Humble Objects, from Clean Architecture by Robert C. Martin. ISBN-10: 0134494164, ISBN-13: 978-0134494166.

[Next block](../block-4/index.md)
