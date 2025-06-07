Make the following modifications:

- strictly maintain the current page structure
- update @route.tsx in app/products and implement the design for the page structure in @products.html in design folder.
- build custom components for the following:
  - the filtering section which is at the top of the folders
  - the pagination component which is below the products

## ARCHITECTURE

- products page:
  - must be server component which initially serves the header
- products content component (wrapper for the client components which renders progressively):
  - renders inputs and selectors partially (static content first and interactive after hydration)
- products search:
  - must be a client component
- all selectors (category, price range, sort by):
  - must be client
- pagination component must be client
