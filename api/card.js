import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const font = fetch(new URL('../assets/SanFranciscoText-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function (req) {
  const fontData = await font
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || '[title]'
  const author = searchParams.get('author') || '[author]'
  const color = searchParams.get('color') || '#040404'
  const background = searchParams.get('background') || '#ffffff'

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          fontFamily: 'SF',
          lineHeight: 1.125,
          color: color,
          backgroundColor: background,
          padding: 64,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                marginTop: 'auto',
                marginBottom: 'auto',
                fontSize: 64,
                letterSpacing: -3,
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 40,
                letterSpacing: -2,
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
          name: 'SF',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
