# E-commerce Product Page with Progressive UI Streaming

## Problem Statement

You are tasked with building a high-performance e-commerce product page that needs to display a large amount of data while maintaining excellent user experience. The page should include:

1. Product images (multiple high-resolution images)
2. Product details (name, price, description)
3. Customer reviews (potentially hundreds)
4. Related products
5. Product specifications
6. Stock information
7. Shipping details

The challenge is that this data comes from multiple sources and some of it might take longer to load than others. For example:

- Product images might be large and take time to load
- Customer reviews might need to be fetched from a separate API
- Related products might require additional database queries
- Stock information might need real-time updates

## Requirements

1. The page should be immediately interactive, even before all data is loaded
2. Users should see the most critical information first (product name, main image, price)
3. Secondary information should load progressively
4. The page should maintain a good Core Web Vitals score
5. The solution should handle slow or failed data fetches gracefully
6. The UI should be responsive and maintain a smooth user experience

## Technical Constraints

- Use Next.js 14 or later
- Implement Server Components where appropriate
- Use Streaming for progressive loading
- Implement proper loading states and error boundaries
- Follow Next.js best practices for data fetching

## Success Criteria

1. First Contentful Paint (FCP) should be under 1.8 seconds
2. Time to Interactive (TTI) should be under 3.8 seconds
3. The page should be fully functional even if some data is still loading
4. Users should be able to add items to cart before all data is loaded
5. The solution should handle network issues gracefully

## Bonus Challenges

1. Implement real-time stock updates
2. Add a "Recently Viewed Products" section that updates as users browse
3. Implement progressive image loading with blur placeholders
4. Add a "Save for Later" feature that works offline
5. Implement a "Share Product" feature that generates a preview card

## Learning Objectives

This problem will help you understand:

- How to implement progressive UI streaming in Next.js
- Best practices for handling multiple data sources
- How to optimize for Core Web Vitals
- How to create a responsive and resilient user interface
- How to handle loading states and errors effectively
- How to implement proper data fetching strategies in Next.js

## Getting Started

1. Set up a new Next.js project
2. Create the basic page structure
3. Implement the streaming components
4. Add loading states and error boundaries
5. Test the performance and user experience
6. Optimize based on Core Web Vitals

This problem will give you hands-on experience with Next.js's streaming capabilities and help you understand how to build high-performance web applications that provide an excellent user experience even when dealing with complex data requirements.
