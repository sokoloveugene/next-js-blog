First, run the development server:

npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Some words about project. 

App has 4 pages: 
    - Main page with latest Posts (`/` route). Posts sorted in right order.
    - Single Post page (`/posts/:postId` route). With the ability to view all comments and add your own. To open it just click on post card.   
    - Create Post page (`/posts/new` route)
    - Page with saved Posts (post IDs are stored with redux. In future will be implemented persist service. To save data between refreshes). Decided not to save posts with redux, for better UX (they need to be up to date)

Framer motion was used to animate components.
