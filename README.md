# WOO Yu Kit Vincent Homepage

### [https://vincent-homepage.web.app/](https://vincent-homepage.web.app/)



The webpage is mainly using Next.js, Chakra UI framework and blender with Three.js.

>Thanks for [craftzdog](https://github.com/craftzdog/craftzdog-homepage) who is Full stack developer from Japan.
>
>My portfolio Webpage is following his great tutorial in [youtube channel](https://www.youtube.com/watch?v=bSMZgXzC9AA) to create. It is a great practice to learn next.js.

## Hosting Setup
I was using `next export` to build static pages and deplay to public via firebase hosting. The whole development and deployment processes are very smooth.

For firebase hosting service setup with Next.js.

Reference: [https://medium.com/nerd-for-tech/lets-deploy-a-next-js-app-with-firebase-hosting-e070b3aecd04](https://medium.com/nerd-for-tech/lets-deploy-a-next-js-app-with-firebase-hosting-e070b3aecd04)

### For Development
```
npm run dev 
```

### For Deployment
```
npm run build

firebase deploy --only hosting
```