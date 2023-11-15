export const config = {
  application: {
    cors: {
      server: [
        {
          origin: "http://127.0.0.1:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
          credentials: true,
        },
      ],
    },
  },
};
