# Next Blog

This is a exercice to learn [NextJS](https://nextjs.org/) with [Prisma](https://www.prisma.io/), [TailwindCSS](https://tailwindcss.com) and [MongoDB](https://www.mongodb.com/).

## Prisma

To using prisma, we need to install it with :

```bash
npm i prisma @prisma/client
```

After installation, we need to generate the prisma client with:

```bash
npx prisma generate
```

And push changes to db:

```bash
npx prisma db push
```

Then we can use prisma to manage our database.

## MongoDB

I'm using [MongoDB Atlas](https://www.mongodb.com/fr-fr/atlas) to store data.

I using [MongoDB Compass](https://www.mongodb.com/products/compass) to manage my database.

## Packages

I'm using multiple packages to make my life easier.

- [React Hot Toast](https://react-hot-toast.com/) to display notifications.
- [Lucide](https://lucide.dev/) to display icons.
- [Date-fns](https://date-fns.org/) to format dates.