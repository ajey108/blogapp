🎮 GameVerse – A Game-Centric Blog Platform
GameVerse is a modern, full-stack blog application built with Next.js, React, Node.js, Express, and MongoDB. It serves as a curated hub for game-related blog posts, with an admin panel for blog and subscriber email management.

🚀 Features
🏠 Public Interface
Homepage with Game Blogs
Beautifully displayed blog cards focused on the latest in gaming — RPG FPS HORROR.

![BlogMainHomePage](https://github.com/user-attachments/assets/5b59c027-0ce9-4b0f-b9fc-484bb0995b74)

Detailed Blog View
Click on any blog card to navigate to a full blog post page with rich content.

Email Subscription
Visitors can subscribe using their email to stay updated with the latest game blogs.

🔐 Admin Panel
A secure section only accessible to admins:

Upload Blog
Easily add a new blog post using the admin form.

Delete Blog
Manage content by deleting outdated or irrelevant blogs.

Manage Subscriber Emails
View the list of subscribed emails and delete entries if necessary (e.g., spam or invalid signups).

🧑‍💻 Tech Stack
Frontend: Next.js + React

Backend: Node.js + Express

Database: MongoDB

Styling: Tailwind CSS or your custom choice

🛠 Setup Instructions
1. Clone the Repository
   
```
git clone https://github.com/yourusername/blogapp.git
cd gameverse-blog-app
 ```

2. Install Dependencies
# For both client and server
```npm install```

3. Set up Environment Variables
Create a .env.local for Next.js and a .env for your Express server. Include:

```
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Server Port
PORT=5000
```

✨ Future Ideas
 search for blogs
 
Admin and user login with JWT

Like featue

Email newsletter integration (e.g., Mailchimp)


🙌 Contributing
PRs and suggestions are welcome! Please open issues for bugs or feature requests.






