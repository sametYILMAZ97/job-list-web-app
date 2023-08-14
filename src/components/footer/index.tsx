import { FC } from 'react'

type FooterComponentProps = {}

const FooterComponent: FC<FooterComponentProps> = ({}) => {
  const links = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samet-yilmaz-77ba011b3/',
      image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/sametYILMAZ97',
      image: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
    },
  ]

  return (
    <>
      <div className='flex flex-col items-center w-screen space-y-2'>
        <h1 className='text-2xl font-bold text-white'>Links</h1>
        <div className='flex flex-row space-x-12'>
          {links.map((link) => (
            <a
              href={link.url}
              target='_blank'
              rel='noreferrer'
              className='flex flex-col items-center space-y-2 text-white'
            >
              <img src={link.image} alt={link.title} className='w-10 h-10 rounded-full' />
              <p className='text-sm font-semibold'>{link.title}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default FooterComponent
