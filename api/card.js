import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const font = fetch(new URL('../assets/PPNeueMontreal-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function (req) {
  const fontData = await font
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || '[title]'
  const author = searchParams.get('author') || '[author]'
  const color = searchParams.get('color') || '#040404'
  const background = searchParams.get('background') || '#f2f2f2'

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          fontFamily: 'Font',
          lineHeight: 1.125,
          color: color,
          backgroundColor: background,
          padding: 64,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 32,
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                marginTop: 'auto',
                // marginBottom: 'auto',
                fontSize: 80,
                letterSpacing: -1,
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                height: 1,
                backgroundColor: 'currentColor',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 40,
              },
              children: author,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Font',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
