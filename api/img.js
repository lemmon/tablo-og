import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function () {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        children: 'Hello World',
        style: {
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    {
      width: 1200,
      height: 600,
    }
  )
}
